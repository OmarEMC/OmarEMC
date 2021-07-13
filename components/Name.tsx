import clsx from 'clsx'
import { motion } from 'framer-motion'

function Name ({ className }: { className: string; }) {
  return (
    <motion.div className={clsx('text-gray-800 font-bold dark:text-gray-200', className)} layoutId="omaremc-title">
      Omar
      <span className="text-primary-700">EMC</span>
    </motion.div>
  )
}

export default Name
