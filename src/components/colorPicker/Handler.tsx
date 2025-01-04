import classNames from 'classnames'
import React, { FC } from 'react'

type HandleSize = 'default' | 'small'

export interface HandleProps {
  color?: string
  size?: HandleSize
}

const Handler: FC<HandleProps> = ({ size = 'default', color }) => {
  return (
    <div
      className={classNames('color-picker-panel-palette-handler', {
        'color-picker-panel-palette-handler-small': size === 'small',
      })}
      style={{
        backgroundColor: color,
      }}
    ></div>
  )
}

export default Handler
