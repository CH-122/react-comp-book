import React from 'react'
import ColorPicker from '../../components/colorPicker/ColorPicker'
import { Color } from '../../components/colorPicker/color'

function colorPickerPage() {
  return (
    <div>
      <ColorPicker value={new Color('rgb(166,57,255)')} />
    </div>
  )
}

export default colorPickerPage
