import Sidebar from "./Sidebar"
import type { ReactElement } from 'react'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Sidebar />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout