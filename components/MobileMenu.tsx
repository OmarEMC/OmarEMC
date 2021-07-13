import { useCallback, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, Variants } from 'framer-motion'

import { NavLinks } from '@/components/Header'

const menuVariants: Variants = {
  initial: { y: '-105%' },
  animate: { y: '0%' },
  exit: { y: '105%' }
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu ({ open, onClose }: MobileMenuProps) {
  const router = useRouter()
  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  useEffect(() => {
    router.events.on('routeChangeStart', handleClose)

    return () => {
      router.events.off('routeChangeStart', handleClose)
    }
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          exit="exit"
          initial="initial"
          animate="animate"
          transition={{
            type: 'tween',
            duration: 0.6
          }}
          variants={menuVariants}
          className="fixed z-50 w-full h-full inset-0 bg-white dark:bg-gray-800"
        >
          <motion.button
            animate={{ rotate: 0, transition: { duration: 1 } }}
            initial={{ rotate: 180 }}
            exit={{ rotate: 180 }}
            onClick={handleClose}
            className="absolute z-10 top-5 p-2 right-5 rounded-full border border-gray-800"
          >
            <FiX className="w-8 h-8" />
          </motion.button>
          <div className="flex flex-col gap-1 p-12">
            <NavLinks className="text-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
