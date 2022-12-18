import Image from "next/image"
import { HomeIcon, BellAlertIcon, UsersIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import React, { Children } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const Sidebar = () => {

  return (
    <div className="bg-slate-100 flex flex-col items-center justify-between h-screen w-fit px-4 py-8">
      <Image
        src={'/thirteen.svg'}
        width={30}
        height={30}
        alt={'Logo'}
        priority
      />

      <div className="flex flex-col items-center gap-y-10">
        <MenuButton href={'/'}>
          <HomeIcon />
        </MenuButton>

        <MenuButton href={'/my-teams'}>
          <UsersIcon />
        </MenuButton>

        <MenuButton href={'/notifications'}>
          <BellAlertIcon />
        </MenuButton>

        <MenuButton href={'/bookmarks'}>
          <BookmarkIcon />
        </MenuButton>
      </div>


      <Image
        src={'/profile-demo.jpg'}
        className={"w-10 h-10 rounded-full overflow-hidden object-cover hover:cursor-pointer outline outline-2 outline-white hover:outline-slate-700 transition duration-300"}
        width={32}
        height={32}
        alt={'Profile'}
        priority
      />
    </div>
  )
}

const MenuButton = ({ children, href, ...props }: { children: JSX.Element, href: any }) => {

  const { asPath } = useRouter()
  const child = Children.only(children)

  const className = asPath === href
    ? "p-2 rounded-md bg-slate-700 text-white transition duration-300"
    : "p-2 rounded-md hover:bg-slate-700 hover:text-white transition duration-300"

  return (
    <Link href={href}>
      <div className={className}>
        {React.cloneElement(child, {
          className: "w-6 h-6"
        })}
      </div>
    </Link>
  )
}


export default Sidebar