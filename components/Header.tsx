import Link from 'next/link'
import { ReactNode } from 'react'

function Header () {
  return (
    <header className="flex-initial w-full flex items-center p-3">
      <div className="flex-1 font-semibold text-lg mr-2">OmarEMC</div>

      <div className="flex">
        <span className="text-xl py-1 text-purple-400 font-bold">{'{'}</span>
        <NavLink href="/">
          Inicio
        </NavLink>
        <NavLink href="/projects">
          Proyectos
        </NavLink>
        <span className="text-xl py-1 text-purple-400 font-bold">{'}'}</span>
      </div>
    </header>
  )
}

function NavLink ({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} passHref>
      <a className="font-semibold text-lg transition px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-white">
        {children}
      </a>
    </Link>
  )
}

export default Header
