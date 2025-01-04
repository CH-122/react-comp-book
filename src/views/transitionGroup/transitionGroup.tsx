import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import './transitionGroup.scss'

function TransitionGroup() {
  const [items, setItems] = useState([
    {
      id: '1',
      text: '1',
    },
    {
      id: '2',
      text: '2',
    },
  ])

  const transitions = useTransition(items, {
    keys: item => item.id,
    initial: { transform: 'translate3d(0%, 0 ,0 )', opacity: 0 },
    from: { transform: 'translate3d(100%, 0 ,0 )', opacity: 0 },
    enter: { transform: 'translate3d(0%, 0 ,0 )', opacity: 1 },
    leave: { transform: 'translate3d(-100%, 0 ,0 )', opacity: 0 },
  })

  const [activeId, setActiveId] = useState<string | null>(null)

  const removeItem = (id: string) => {
    setActiveId(id)
    setItems(items => items.filter(item => item.id !== id))
  }

  const addItem = () => {
    const id = Math.random().toString(36).substring(2, 15)
    setItems(items => [...items, { id, text: id }])
  }

  return (
    <div>
      <button onClick={addItem}>add</button>
      <div>
        {transitions((style, i) => {
          return (
            <animated.div
              className={`item ${activeId === i.id ? 'active-leave-item' : ''}`}
              style={style}
            >
              <span className="del-icon" onClick={() => removeItem(i.id)}>
                <span className="ml-[12px]"> x</span>
              </span>
              <span className="ml-[12px]">{i.text}</span>
            </animated.div>
          )
        })}
      </div>
    </div>
  )
}

export default TransitionGroup
