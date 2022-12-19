import Sidebar from "./Sidebar"
import type { ReactElement } from 'react'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="">
      <Sidebar />
      <main className="ml-20">
        {children}
      </main>
    </div>
  )
}

export default Layout