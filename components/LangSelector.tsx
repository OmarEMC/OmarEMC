import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useTranslation from 'next-translate/useTranslation'
import i18nConfig from '../i18n.json'

import { scaleY } from '@/utils/animations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

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
  const [show, setShow] = useState(false)
  const { lang } = useTranslation()
  const router = useRouter()

  return (
    <div className="w-full lg:max-w-sm mx-3">
      <div className="relative">
        <button className="px-4 bg-white focus:outline-none" onClick={() => setShow(!show)}>
          <img
            width="20"
            height="20"
            className="inline-block mr-2"
            src={languages[lang as keyof typeof languages].img.src}
            alt={languages[lang as keyof typeof languages].img.alt}
          />
          {languages[lang as keyof typeof languages].name}
        </button>

        <AnimatePresence>
          {show && (
            <motion.div
              className="origin-bottom border-2 border-white shadow-xl rounded-lg w-full bg-gray-300 md:w-screen md:max-w-sm absolute bottom-8 left-0"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={scaleY}
            >
              {locales.map((lng) => (
                <Link href={router.route} locale={lng} key={lng} passHref>
                  <a
                    className={clsx(
                      'p-2 block font-semibold hover:bg-gray-400',
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