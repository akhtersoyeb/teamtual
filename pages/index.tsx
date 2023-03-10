import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          {!session ? (
            <div className='flex items-center h-screen'>
              <div className='w-80 mx-auto'>
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  providers={['github']}
                />
              </div>
            </div>
          ) : (
            <div>
              <p>Account page will go here</p>
              <button onClick={signOut}>Sign Out</button>
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}
