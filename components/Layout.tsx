import Sidebar from "./Sidebar"
import type { ReactElement } from 'react'
import { useSession } from '@supabase/auth-helpers-react'


const Layout = ({ children }: { children: ReactElement }) => {
  const session = useSession()

  const mainClassName = session ? "ml-20" : ""

  return (
    <div className="">
      {session && (
        <Sidebar />
      )}

      <main className={mainClassName}>
        {children}
      </main>
    </div>
  )
}

export default Layout