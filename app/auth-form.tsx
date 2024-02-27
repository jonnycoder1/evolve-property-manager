'use client';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../database.types'

type AuthFormProps = {
  redirectUrl: string
};

export default function AuthForm({ redirectUrl }: AuthFormProps) {
  console.log('AuthForm redirectUrl = ' + redirectUrl);
  const supabase = createClientComponentClient<Database>()
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
      redirectTo={redirectUrl}
    />
  )
}
