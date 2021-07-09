import clsx from 'clsx'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import { FiGithub, FiMenu, FiTwitter } from 'react-icons/fi'
import useTranslation from 'next-translate/useTranslation'

import Name from '@/components/Name'
import SocialItem from '@/components/SocialItem'
import MobileMenu from '@/components/MobileMenu'

export interface HeaderProps {
  showTitle?: boolean;
}

function Header ({
  showTitle = true
}: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex-initial w-full flex items-center p-3">
      <div className="flex-1 flex items-center gap-2">
        {showTitle && (
          <Name className="font-semibold text-lg mr-2" />
        )}

        <motion.div layoutId="social" className="flex gap-2 z-10">
          <SocialItem title="Twitter" icon={FiTwitter} link="https://twitter.com/OmarEMC_" />
          <SocialItem title="Github" icon={FiGithub} link="https://github.com/OmarEMC" />
        </motion.div>
      </div>

      <div className="flex items-center">
        <section className="sm:hidden">
          <button onClick={() => setOpen(true)}>
            <FiMenu className="w-6 h-6" />
          </button>
          <MobileMenu open={open} onClose={() => setOpen(false)} />
        </section>

        <section className="hidden sm:flex sm:gap-1">
          <span className="text-xl py-1 text-primary-400 font-bold">{'{'}</span>
          <NavLinks />
          <span className="text-xl py-1 text-primary-400 font-bold">{'}'}</span>
        </section>
      </div>
    </header>
  )
}

function NavLink ({
  href,
  children,
  className
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <a className={clsx(
        'font-semibold text-lg transition px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-white',
        {
          'font-bold underline text-primary-800': router.pathname.split('/')[1] === href.split('/')[1]
        }, className
      )}>
        {children}
      </a>
    </Link>
  )
}

export function NavLinks ({ className }: { className?: string; }) {
  const { t } = useTranslation('common')

  return (
    <>
      <NavLink href="/" className={className}>{t('home')}</NavLink>
      <NavLink href="/projects" className={className}>{t('projects')}</NavLink>
    </>
  )
}

export default Header
