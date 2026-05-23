version 1.1
sends meesages from hvac form to db and retrieved into business dashboard

step1. run ./start.bat
step2. open index.html in browser from websites/hvac and complete+send the form
step3. check in http://localhost:3000/dashboard logged in as owner@hvac (it should be prepopulated or check the prisma client)
note: you have all the urls in the terminal displayed




| Domain                | Goes to     |
| --------------------- | ----------- |
| hvac.klarpath.com     | static site |
| plumbers.klarpath.com | static site |
    |
| app.klarpath.com      | Next.js CRM |

create me an node.js app on top of this that is using the latest app router and separate API directory for external calls as used in the industry and best practices - THIS IS A MUST. So, again, please do not add unneccessary code and ask if you derive from the inital architecture before implementing. Also, use the design, colours, logo, fonts, etc from design_klarpath.com for this project to match as much as possible, but yet clean and modern, intuitive layout. please also ask questions before starting the development so we can conclude on architecture first. The app should rely on open-source only - cuting-edge and not payed softwares. For safety use standard jwt or any other login system applicable for this scenario. SCENARIO: My Klarpath AI marketing agency needs a reliable backend to plug and play at deployment maybe on Render or any other compatible provider who is offering a generous free tier. the agency is at teh begining and should host for the first year up to 100 users - small businesses in London. The apis should fetch/send messages, bookings, businesses and their clients data. As I am planning to use the multi-tenancy model as you can infere from the prisma schema and init.sql, one business should be restricted to see other data than its own, so only the admin can have access to it. Now, I need organised and separate dashboards for admin and businesses. Idealy, one react reusable front-end with the needed restrictions for businesses as obviously the admin will have more features. Each dashboard should have business profile section, analitycs, clients and other general elements eligible for an crm. Also, it should interact and integrate with the static websites (hvac.klarpath.com and plumbers.klarpath.com) from the websites folder. The architecture should be scalable as in the future will be added payment and other features. PLease use the yml file provided as a reference and leave what is neccessary or adapt, so I need a reliable access to my db even after deployment - where to do CRUD as admin plus access to prisma client after deployment. Basically, the project tools that I will use here should be available after deployment as well, that was the idea behind using Docker Desktop on my win11 machine. So, please feel free to ask further questions before proceeding further. thanks
Use the latest technologies: 1. Auth: JWT. 2.business owner should do Google as well if does not add much more complexity at the development stage. 3. 2FA definettly later. 4. Option A: Single Next.js app with role-based routing. 5 use this please: UI Framework: Should I use Tailwind CSS + Shadcn/UI. 6. Option A: Next.js API routes in /app/api (simpler, serverless-friendly for Render). 7. Both, especially for booking where the calendar within the static website which you will code there as well, should accept clients booking based on businesses availabilities in 1 hour slots or 2 hours slots, where the slots should be editable by businesses from their dashboards. 8. Real-time features- polling. 9. both : Prisma Studio endpoint (built-in) and Custom admin CRUD UI.
Database migrations: Auto-run with app startup. 11. this is the exact priority order: MVP scope of features: Messaging system;Bookings anagement;Client management;Analytics;
