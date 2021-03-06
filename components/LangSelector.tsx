import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'

import i18nConfig from '../i18n.json'
import { scaleY } from '@/utils/animations'
import useClickOutside from '@/hooks/useClickOutside'

const { locales } = i18nConfig
const languages = {
  es: {
    name: 'Español',
    img: {
      src: '/twemoji_flag_co.png',
      alt: 'Bandera Colombiana'
    }
  },
  en: {
    name: 'English',
    img: {
      src: '/twemoji_flag_us.png',
      alt: 'US Flag'
    }
  }
}

function LangSelector () {
  const router = useRouter()
  const { lang } = useTranslation()
  const [show, setShow] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const closeDropdown = () => {
    setShow(false)
  }

  useClickOutside(containerRef, closeDropdown)
  useEffect(() => {
    router.events.on('routeChangeComplete', closeDropdown)

    return () => {
      router.events.off('routeChangeComplete', closeDropdown)
    }
  }, [])

  return (
    <div className="w-full lg:max-w-sm mx-3" ref={containerRef}>
      <div className="relative">
        <button className="flex items-center px-4 font-medium bg-white border border-gray-800 focus:outline-none dark:bg-gray-500 dark:hover:bg-gray-600" onClick={() => setShow(!show)}>
          <img
            width="20"
            height="20"
            className="inline-block mr-1"
            src={languages[lang as keyof typeof languages].img.src}
            alt={languages[lang as keyof typeof languages].img.alt}
          />
          {languages[lang as keyof typeof languages].name}
        </button>

        <AnimatePresence>
          {show && (
            <motion.div
              className="origin-bottom border-2 border-white shadow-xl rounded-lg w-full bg-gray-200 md:w-screen md:max-w-sm absolute bottom-8 left-0 dark:bg-gray-600 dark:border-gray-400 z-50"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={scaleY}
            >
              {locales.map((lng) => (
                <Link href={router.asPath} locale={lng} key={lng} passHref>
                  <a
                    className={clsx(
                      'p-2 block font-semibold hover:bg-gray-300 dark:hover:bg-gray-500',
                      {
                        'font-bold': lang === lng
                      }
                    )}>
                    <img
                      width="20"
                      height="20"
                      className="inline-block mr-2"
                      src={languages[lng as keyof typeof languages].img.src}
                      alt={languages[lng as keyof typeof languages].img.alt}
                    />
                    {languages[lng as keyof typeof languages].name}
                  </a>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LangSelector
