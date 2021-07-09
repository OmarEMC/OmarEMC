import clsx from 'clsx'
import { AnchorHTMLAttributes } from 'react'

function Link ({ href, className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={clsx('text-gray-700 font-francis font-medium hover:text-gray-800 hover:underline', className)}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
