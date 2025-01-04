import { RefObject, useEffect, useState } from 'react'

const useScroll = (ref: RefObject<HTMLElement>): boolean => {
  const [state, setState] = useState(false)

  useEffect(() => {
    if (ref.current) {
      let timer = null

      const handleScrollEnd = () => {
        setState(false)
      }

      const handleScroll = () => {
        setState(true)
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(handleScrollEnd, 100)
      }

      ref.current.addEventListener('scroll', handleScroll)

      return () => {
        ref.current?.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref])

  return state
}

export default useScroll
