## Overview
This is a Next.js and Supabase web application for a property owner to describe their property to Evolve. 

It is still work-in-progress but a demo can be found at: https://evolve-property-manager.vercel.app/


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

