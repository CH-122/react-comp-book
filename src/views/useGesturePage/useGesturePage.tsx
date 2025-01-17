import React, { useRef } from 'react'
import { animated, useSprings } from 'react-spring'
import './useGesturePage.scss'
import { useDrag } from '@use-gesture/react'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
]

function useGesturePage() {
  const index = useRef(0)
  const width = window.innerWidth

  const [props, api] = useSprings(pages.length, i => {
    return {
      x: i * width,
      scale: 1,
    }
  })

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && Math.abs(mx) > width / 2) {
      let newIndex = index.current + (xDir > 0 ? -1 : 1)

      if (newIndex < 0) {
        newIndex = 0
      }

      if (newIndex > pages.length - 1) {
        newIndex = pages.length - 1
      }

      index.current = newIndex

      cancel()
    }
    api.start(i => {
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
      return { x, scale }
    })
  }) as unknown as () => any

  return (
    <div className="wrapper">
      {props.map(({ x, scale }, i) => {
        return (
          <animated.div key={i} className="page" style={{ x }} {...bind()}>
            <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }} />
          </animated.div>
        )
      })}
    </div>
  )
}

export default useGesturePage
