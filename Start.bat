@echo off
REM Start Klarpath CRM stack and show endpoints
cd /d %~dp0
setlocal enabledelayedexpansion

echo Starting Klarpath CRM stack...
set "COMPOSE_CMD=docker compose"
%COMPOSE_CMD% version > nul 2>&1
if errorlevel 1 (
  set "COMPOSE_CMD=docker-compose"
)

echo Using %COMPOSE_CMD% to launch services...
%COMPOSE_CMD% up --build -d
if errorlevel 1 (
  echo.
  echo ERROR: Docker Compose failed to start services.
  echo Check Docker Desktop and the compose configuration.
  pause
  exit /b 1
)

echo Waiting for services to initialize...
timeout /t 5 /nobreak > nul

echo.
echo Waiting for Postgres to be ready...
for /l %%i in (1,1,30) do (
  docker exec klarpath_crm_postgres pg_isready -U klarpath_user -d klarpath_crm > nul 2>&1
  if not errorlevel 1 goto postgres_ready
  timeout /t 2 /nobreak > nul
)
echo WARNING: Postgres did not become ready in time.
goto postgres_done

:postgres_ready
echo Postgres is ready.
:postgres_done

echo.
echo Waiting for the app to respond on http://localhost:3000/api/hello ...
for /l %%i in (1,1,30) do (
  curl --silent --show-error --fail http://localhost:3000/api/hello > nul 2>&1
  if not errorlevel 1 goto app_ready
  timeout /t 2 /nobreak > nul
)
echo WARNING: App did not become ready in time. You can inspect logs with %COMPOSE_CMD% logs --tail 50 app
goto app_done

:app_ready
echo App is ready.
:app_done

echo.
echo Services started. Endpoints:
echo.
echo - App (Next.js): http://localhost:3000
echo - Prisma Studio: http://localhost:5555
echo - pgAdmin: http://localhost:5050
REM MailHog UI removed (service dropped from compose)
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
  echo Waiting for Postgres to be ready for SQL import...
  for /l %%i in (1,1,30) do (
    docker exec klarpath_crm_postgres pg_isready -U klarpath_user -d klarpath_crm > nul 2>&1
    if not errorlevel 1 goto postgres_ready_import
    timeout /t 2 /nobreak > nul
  )
  echo WARNING: Postgres did not become ready in time. Skipping dummy SQL import.
  goto skip_dummy_import
)

echo No databases\dummy.sql found; nothing to import.
goto skip_seed

:postgres_ready_import
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
echo To follow logs: %COMPOSE_CMD% logs -f
pause
