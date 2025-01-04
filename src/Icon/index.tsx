import React, { forwardRef, PropsWithChildren } from 'react'
import cs from 'classnames'
import './index.scss'

type BaseIconProps = {
  className?: string
  style?: React.CSSProperties
  size?: string | string[]
  spin?: boolean
  rotate?: number
}

export type IconProps = BaseIconProps & Omit<React.SVGProps<SVGSVGElement>, keyof BaseIconProps>

export const getSize = (size: IconProps['size']) => {
  if (Array.isArray(size) && size.length === 2) {
    return size as string[]
  }
  const width = (size as string) || '1em'
  const height = (size as string) || '1em'
  return [width, height]
}

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
  const { className, style, size = '1em', spin, rotate, children, ...rest } = props
  const [width, height] = getSize(size)
  const cn = cs(
    'icon',
    {
      'icon-spin': spin,
      [`icon-rotate-${rotate}`]: rotate,
    },
    className
  )

  return (
    <svg
      ref={ref}
      className={cn}
      style={style}
      fill="currentColor"
      {...rest}
      width={width}
      height={height}
    >
      {children}
    </svg>
  )
})
