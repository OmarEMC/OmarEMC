import clsx from 'clsx'
import { HTMLMotionProps, motion } from 'framer-motion'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface LayoutProps extends HTMLMotionProps<'div'> {
  prevPage?: string;
  nextPage?: string;
}

function Layout ({
  children,
  className,
  prevPage,
  nextPage,
  variants: customVariants = {}
}: LayoutProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className={clsx('flex flex-col w-full h-full relative', className)}
    >
      <Header />

      <motion.div
        variants={customVariants}
        className="w-full h-full flex-1"
      >
        {children}
      </motion.div>

      <Footer prevPage={prevPage} nextPage={nextPage} />
    </motion.div>
  )
}

export default Layout
