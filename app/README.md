Klarpath CRM app (dev)

Folder: `app/` contains the Next.js app router project. Run `npm install` inside `app/` and then `npm run dev` to start.

Docker: root `Dockerfile` builds the app using `app/` as context.

Notes: Prisma schema is at the repo root (`schema.prisma`). Seed with `npm run seed` inside `app/` or via the `Start.bat` script.
