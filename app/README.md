Klarpath CRM app (dev)

Folder: `app/` contains the Next.js app router project. Run `npm install` inside `app/` and then `npm run dev` to start.

Docker: root `Dockerfile` builds the app using `app/` as context.

Notes: Prisma schema is at the repo root (`schema.prisma`). Automated seeding was removed from the compose and scripts; to populate demo data run SQL imports from `databases/dummy.sql` or create/run your own seed script as needed.
