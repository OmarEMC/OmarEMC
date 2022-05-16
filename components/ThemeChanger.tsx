import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { FiLoader, FiMoon, FiSun } from 'react-icons/fi'

const variants = {
  initial: { y: '-110%' },
  animate: { y: '0%' },
  exit: { y: '110%' }
}

function ThemeChanger () {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const isDark = theme === 'dark'
  const className = clsx('p-3 cursor-pointer', {
    'hover:bg-gray-600': isDark,
    'hover:bg-gray-200': !isDark
  })

  useEffect(() => setMounted(true), [])

  return (
    <div className="shadow overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        {!mounted
          ? (
            <div className={className}>
              <FiLoader />
            </div>
          )
          : (
            <motion.div
              exit="exit"
              initial="initial"
              animate="animate"
              variants={variants}
              className={className}
              key={isDark ? 'theme-dark' : 'theme-light'}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? <FiMoon /> : <FiSun />}
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeChanger
