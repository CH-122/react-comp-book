import React, { CSSProperties, useState } from 'react'
import cs from 'classnames'
import { ColorType } from './interface'
import { Color } from './color'
import Palette from './Palette'
import './index.scss'

export interface ColorPickerProps {
  className?: string
  style?: CSSProperties
  value?: ColorType
  onChange?: (value: Color) => void
}

function ColorPicker(props: ColorPickerProps) {
  const { className, style, value, onChange } = props

  const [colorValue, setColorValue] = useState<Color>(() => {
    if (value instanceof Color) {
      return value
    }
    return new Color(value)
  })

  const classNames = cs('color-picker', className)

  function onPaletteChange(color: Color) {
    setColorValue(color)
    onChange?.(color)
  }

  return (
    <div className={classNames} style={style}>
      <div className="w-400px h-160px ">
        <Palette color={colorValue} onChange={onPaletteChange}></Palette>
      </div>
    </div>
  )
}

export default ColorPicker
