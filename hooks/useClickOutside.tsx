import { useEffect, RefObject, useCallback } from 'react'

function useClickOutside (ref: RefObject<any>, onClick: () => void) {
  const handleClick = useCallback((e: MouseEvent) => {
    if (ref && ref.current) {
      if (!ref.current.contains(e.target)) {
        onClick()
      }
    }
  }, [ref.current])

  useEffect(() => {
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
}

export default useClickOutside
