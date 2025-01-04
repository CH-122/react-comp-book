import React, { forwardRef } from 'react'

export interface TransformOffset {
  x: number
  y: number
}

export interface TransformProps {
  children: React.ReactNode
  offset: TransformOffset
}

const Transform = forwardRef<HTMLDivElement, TransformProps>((props, ref) => {
  const { children, offset } = props

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', top: offset.y ?? 0, left: offset.x ?? 0, zIndex: 1 }}
    >
      {children}
    </div>
  )
})

export default Transform
