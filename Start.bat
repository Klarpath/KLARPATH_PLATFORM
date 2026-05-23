@echo off
REM Start Klarpath CRM stack and show endpoints
cd /d %~dp0
echo Starting Docker Compose (this may require Docker Desktop)...
docker-compose up --build -d

echo Waiting for services to initialize (10s)...
timeout /t 10 /nobreak > nul

echo.
echo Services started (if Docker is running). Endpoints:
echo.
echo - App (Next.js): http://localhost:3000
echo - Prisma Studio: http://localhost:5555
echo - pgAdmin: http://localhost:5050
echo - MailHog UI: http://localhost:8025
echo - Postgres (port): 5432
echo.
echo Quick API checks:
echo GET /api/hello
curl --silent --show-error http://localhost:3000/api/hello || echo "Failed to reach /api/hello"
echo.
echo GET /api/auth/me (should return null if not signed in)
curl --silent --show-error http://localhost:3000/api/auth/me || echo "Failed to reach /api/auth/me"
echo.
echo Populating demo data directly via SQL import...

if exist "databases\dummy.sql" (
  echo Waiting for Postgres to be ready...
  for /l %%i in (1,1,30) do (
    docker exec klarpath_crm_postgres pg_isready -U klarpath_user -d klarpath_crm > nul 2>&1
    if not errorlevel 1 goto postgres_ready
    timeout /t 2 /nobreak > nul
  )
  echo WARNING: Postgres did not become ready in time. Skipping dummy SQL import.
  goto skip_dummy_import
)

echo No databases\dummy.sql found; nothing to import.
goto skip_seed

:postgres_ready
echo Importing databases\dummy.sql into Postgres...
docker exec -i klarpath_crm_postgres psql -U klarpath_user -d klarpath_crm < "databases\dummy.sql"
if errorlevel 1 echo WARNING: databases\dummy.sql import failed. Please check the file and retry.

:skip_dummy_import

goto skip_seed

:skip_seed

echo Business dashboard login for HVAC:
echo   URL: http://localhost:3000/login
echo   Email: owner@hvac.kp
echo   Password: OwnerPass123!
echo.
echo Admin dashboard login:
echo   URL: http://localhost:3000/admin/login
echo   Email: admin@klarpath.com
echo   Password: AdminPass123!
echo.
echo To follow logs: docker-compose logs -f
pause
