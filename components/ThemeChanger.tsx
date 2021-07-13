import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

const variants = {
  initial: { y: '-110%' },
  animate: { y: '0%' },
  exit: { y: '110%' }
}

function ThemeChanger () {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const className = clsx('p-3 cursor-pointer', {
    'hover:bg-gray-600': isDark,
    'hover:bg-gray-200': !isDark
  })

  return (
    <div className="shadow overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        {isDark && (
          <motion.div
            key="theme-dark"
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
            onClick={() => setTheme('light')}
            variants={variants}
          >
            <FiMoon />
          </motion.div>
        )}
        {!isDark && (
          <motion.div
            key="theme-light"
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
            onClick={() => setTheme('dark')}
            variants={variants}
          >
            <FiSun />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeChanger
