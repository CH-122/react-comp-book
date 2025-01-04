import React, { FC, useRef } from 'react'
import { Color } from './color'
import Handler from './Handler'
import Transform from './Transform'
import useColorDrag from './hooks/useColorDrag'
import { calculateColor, calculateOffset } from './utils'

const Palette: FC<{ color: Color; onChange?: (color: Color) => void }> = ({ color, onChange }) => {
  const transformRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [offset] = useColorDrag({
    containerRef,
    targetRef: transformRef,
    onDragChange: offset => {
      const newColor = calculateColor({
        color,
        offset,
        containerRef,
        targetRef: transformRef,
      })
      onChange?.(newColor)
    },
    calculate: () => calculateOffset(containerRef, transformRef, color),
  })

  return (
    <div className="color-picker-panel-palette" ref={containerRef}>
      <Transform ref={transformRef} offset={{ x: offset.x, y: offset.y }}>
        <Handler color={color.toHexString()} />
      </Transform>
      <div
        className="color-picker-panel-palette-main"
        style={{
          backgroundColor: `hsl(${color.toHsl().h}, 100%, 50%)`,
          backgroundImage:
            'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
        }}
      ></div>
    </div>
  )
}

export default Palette
