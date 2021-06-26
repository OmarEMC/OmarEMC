import Link from 'next/link'
import { ReactNode } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export interface HeaderProps {
  showTitle?: boolean;
}

function Header ({
  showTitle = true
}: HeaderProps) {
  const { t } = useTranslation('common')

  return (
    <header className="flex-initial w-full flex items-center p-3">
      {showTitle
        ? (
          <motion.div layoutId="omaremc-title" className="flex-1 font-semibold text-lg mr-2">OmarEMC</motion.div>
        )
        : (
          <div className="flex-1"></div>
        )}

      <div className="flex">
        <span className="text-xl py-1 text-purple-400 font-bold">{'{'}</span>
        <NavLink href="/">
          {t('home')}
        </NavLink>
        <NavLink href="/projects">
          {t('projects')}
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
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <a className={clsx(
        'font-semibold text-lg transition px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-white',
        {
          'font-bold underline text-purple-800': router.pathname.split('/')[1] === href.split('/')[1]
        }
      )}>
        {children}
      </a>
    </Link>
  )
}

export default Header
