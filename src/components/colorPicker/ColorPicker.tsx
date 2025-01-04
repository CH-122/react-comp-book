import React, { CSSProperties, useState, ChangeEventHandler } from 'react'
import cs from 'classnames'
import { ColorType } from './interface'
import { Color } from './color'
import Palette from './Palette'
import './index.scss'
import { useControllableValue } from 'ahooks'

export interface ColorPickerProps {
  className?: string
  style?: CSSProperties
  value?: ColorType
  defaultValue?: ColorType
  onChange?: (value: Color) => void
}

function ColorPicker(props: ColorPickerProps) {
  const { className, style, value, onChange } = props

  // const [colorValue, setColorValue] = useState<Color>(() => {
  //   if (value instanceof Color) {
  //     return value
  //   }
  //   return new Color(value)
  // })

  const [colorValue, setColorValue] = useControllableValue<Color>(props)

  const classNames = cs('color-picker', className)

  function onPaletteChange(color: Color) {
    setColorValue(color)
    onChange?.(color)
  }

  const handleHueChange: ChangeEventHandler<HTMLInputElement> = e => {
    const hsv = colorValue.toHsv()
    let val = +e.target.value

    setColorValue(
      new Color({
        h: val,
        s: hsv.s,
        v: hsv.v,
      })
    )
  }

  const handleVChange: ChangeEventHandler<HTMLInputElement> = e => {
    const hsv = colorValue.toHsv()
    let val = +e.target.value

    setColorValue(
      new Color({
        h: hsv.h,
        s: hsv.s,
        v: val,
      })
    )
  }

  return (
    <div className={classNames} style={style}>
      <div className="w-400px h-160px ">
        <Palette color={colorValue} onChange={onPaletteChange}></Palette>
        <div
          className="mt-[16px] w-[30px] h-[30px] "
          style={{ backgroundColor: colorValue.toRgbString() }}
        ></div>

        {/* <div>
          色相：{' '}
          <input
            type="range"
            min={0}
            max={360}
            step={0.1}
            value={colorValue.toHsv().h}
            onChange={handleHueChange}
          />
        </div>
        <div>
          明度：{' '}
          <input
            type="range"
            min={0}
            max={360}
            step={0.1}
            value={colorValue.toHsv().v}
            onChange={handleVChange}
          />
        </div> */}
      </div>
    </div>
  )
}

export default ColorPicker
