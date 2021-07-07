import clsx from 'clsx'
import { HTMLAttributes } from 'react'

function Title ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx('font-medium font-francis underline bg-clip-text text-gray-900', className)} {...props}>
      {children}
    </h3>
  )
}

export default Title
