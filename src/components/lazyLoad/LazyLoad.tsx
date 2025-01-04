import { CSSProperties, FC, ReactNode, useRef, useState, useEffect } from 'react'

interface LazyLoadProps {
  className?: string
  style?: CSSProperties
  placeholder?: ReactNode
  offset?: number | string
  width?: number | string
  height?: number | string
  onContentLoaded?: () => void
  children: ReactNode
}

const LazyLoad: FC<LazyLoadProps> = props => {
  const {
    className = '',
    style,
    placeholder,
    offset = 0,
    width,
    height,
    onContentLoaded,
    children,
  } = props

  const containerRef = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(false)

  const styles = { height, width, ...style }

  const elementObserver = useRef<IntersectionObserver>()

  useEffect(() => {
    const options = {
      rootMargin: typeof offset === 'number' ? `${offset}px` : offset || '0px',
      threshold: 0,
    }

    console.log(options)

    elementObserver.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('entry.isIntersecting', entry.intersectionRatio)
          setVisible(true)
          onContentLoaded?.()
          elementObserver.current?.unobserve(entry.target)
        }
      })
    }, options)

    elementObserver.current.observe(containerRef.current)

    return () => {
      if (elementObserver.current && containerRef.current instanceof HTMLElement) {
        elementObserver.current?.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={className} style={styles}>
      {visible ? children : placeholder}
    </div>
  )
}

export default LazyLoad
