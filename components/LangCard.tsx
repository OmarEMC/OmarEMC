import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Language } from '@/utils/static-data'
import { langAnimation } from '@/utils/animations'

interface LangCardProps {
  lang: Language | undefined;
  className?: string;
}

function LangCard ({ lang, className }: LangCardProps) {
  if (!lang) return null

  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={langAnimation}
      className={clsx('relative inline', className)}
    >
      <span
        title="Go to the official link"
        className="transition-colors duration-300 uppercase font-bold text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-500"
      >
        <a href={lang.link} target="_blank" rel="noreferrer noopener">
          {lang.name}
        </a>
      </span>

      <div
        className="absolute h-0.5 bottom-0 left-0 right-0 opacity-75"
        style={{
          background: lang.color
        }}
      />
    </motion.div>
  )
}

export default LangCard
