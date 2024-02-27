## Overview
This is a Next.js and Supabase web application for a property owner to describe their rental property to Evolve (similar to AirBNB). 

This is primarily a front-end app for a take-home interview coding assignment. 

The demo can be found at: https://evolve-property-manager.vercel.app/


## Purpose & User Stories
The following description is the project spec given for the assignment.

Note: Story #2 is not completed but is nearly built-in given the auth setup.

Please build a simple product for a property owner to describe their propety to Evolve. This can be a wizard type UI or a simple form or something in between. 

A few user stories to consider are shared below. Please note that you can make this backend only, frontend only or fullstack depending on the role, level and your comfort level. 

### User Stories
1. As a vacation property owner that wants to have Evolve manage my property - 
-  I want to create a new property listing on this product
-  I want to be able to describe the property in some level detail (don't worry about photos for now)
-  I want to be able to add specific and multiple amenties to my property (eg: parking, hot tub, Wifi etc.) 
-  I want to be able to add 1+ rooms to my property (eg: Living Room, Bedroom 1, etc.)
2. As an Evolve agent - 
-  I want to be able to fetch and review a property listing



## Getting Started

### Supabase Install & Setup Commands
```bash
npm install @supabase/supabase-js
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js
npm install @supabase/auth-ui-react @supabase/auth-ui-shared
npx supabase init
npx supabase login
npx supabase link --project-ref xwetpmiztbplytjnhvcu
npx supabase gen types typescript --project-id "xwetpmiztbplytjnhvcu" --schema public > database.types.ts
```

### Supabase DB Push (optional)
If your Supabase schema is not setup, you can run the supabase/migrations/ script to create the 
tables and row level policies.
```
npx supabase db push
```

### Setup .env.local
Add the required Supabase keys:
```
NEXT_PUBLIC_SUPABASE_URL=https://<project id goes here>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<project anon key goes here>
```


### Run
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

