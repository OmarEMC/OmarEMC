import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'framer-motion'

import Footer from '@/components/Footer'
import Header, { HeaderProps } from '@/components/Header'

interface LayoutProps extends HTMLMotionProps<'div'> {
  prevPage?: string;
  nextPage?: string;
  headerProps?: HeaderProps;
}

function Layout ({
  children,
  className,
  prevPage,
  nextPage,
  headerProps,
  variants: customVariants = {}
}: LayoutProps) {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      className={clsx('flex flex-col w-full h-full relative', className)}
    >
      <Header {...headerProps} />

      <motion.div
        variants={customVariants}
        className="w-full flex-1 p-4 dark:bg-gray-700"
      >
        {children}
      </motion.div>

      <Footer prevPage={prevPage} nextPage={nextPage} />
    </motion.div>
  )
}

export default Layout
