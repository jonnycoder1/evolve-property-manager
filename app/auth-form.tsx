'use client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../database.types'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  console.log("callback url: " + process.env.AUTH_CALLBACK_URL);
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{
      theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: '#854592',
              brandAccent: '#c0d20f',
            },
          },
        },
      }}
      showLinks={false}
      providers={[]}
      redirectTo={process.env.AUTH_CALLBACK_URL}
    />
  )
}
