import clsx from 'clsx'

import { Language } from '@/utils/static-data'

interface LangCardProps {
  lang: Language | undefined;
  className?: string;
}

function LangCard ({ lang, className }: LangCardProps) {
  if (!lang) return null

  return (
    <div
      className={clsx('flex transition duration-300 relative overflow-hidden bg-white shadow-md rounded-lg p-3 md:p-4 md:border-2 hover:shadow-lg dark:bg-gray-600', className)}
      style={{
        borderColor: lang.style?.border || '#ffffff',
        opacity: lang.style?.opacity || 1
      }}
      title={lang.title}
    >
      <div className="flex-initial flex items-center" style={{ backgroundColor: lang.style?.border || '#ffffff' }}>
        <div className="w-14 h-w-14 md:w-20 md:h-20 overflow-hidden">
          <img src={lang.img} alt={`${lang.name} Logo`} className="w-full h-full object-contain" draggable={false} />
        </div>
      </div>

      <div className="flex-1 flex flex-col flex-wrap items-center justify-center md:flex-row">
        <a href={lang.link} target="_blank" rel="noreferrer noopener" className="text-3xl font-semibold md:ml-4 hover:underline">
          {lang.name}
        </a>
        <span className="text-2xl text-right flex-1 relative font-medium text-gray-600 px-2 sm:flex-initial md:mr-4 dark:text-gray-200">
          {lang.percentage}%
        </span>
      </div>

      <span className="text-2xl bg-gray-500/50 w-1 h-3/4 absolute right-2 bottom-1/2 translate-y-1/2 md:bottom-3 md:right-14 md:rotate-90 lg:right-4 lg:rotate-0 lg:bottom-1/2">
        <span style={{ backgroundColor: lang.style?.border || '#6d28d9', height: `${lang.percentage}%` }} className="absolute bottom-0 left-0 right-0 w-1" />
      </span>
    </div>
  )
}

export default LangCard
