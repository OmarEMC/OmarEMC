import { ReactNode } from 'react'

function Parenthesis ({ children }: { children?: ReactNode }) {
  return (
    <span className="opacity-75 hover:opacity-95">
      {children}
    </span>
  )
}

export default Parenthesis
