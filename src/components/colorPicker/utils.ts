import { Color } from './color'
import { TransformOffset } from './Transform'

export const calculateColor = (props: {
  offset: TransformOffset
  containerRef: React.RefObject<HTMLDivElement>
  targetRef: React.RefObject<HTMLDivElement>
  color: Color
}) => {
  const { offset, containerRef, targetRef, color } = props

  const { width, height } = containerRef.current!.getBoundingClientRect()

  const { width: targetWidth, height: targetHeight } = targetRef.current!.getBoundingClientRect()

  const targetHalfWidth = targetWidth / 2
  const targetHalfHeight = targetHeight / 2

  // 饱和度
  const saturation = (offset.x + targetHalfWidth) / width
  // 亮度
  const lightness = 1 - (offset.y + targetHalfHeight) / height

  const hsv = color.toHsv()

  return new Color({
    h: hsv.h,
    s: saturation <= 0 ? 0 : saturation >= 1 ? 1 : saturation,
    v: lightness <= 0 ? 0 : lightness >= 1 ? 1 : lightness,
    a: hsv.a,
  })
}

export const calculateOffset = (
  containerRef: React.RefObject<HTMLDivElement>,
  targetRef: React.RefObject<HTMLDivElement>,
  color: Color
): TransformOffset => {
  const { width, height } = containerRef.current!.getBoundingClientRect()
  const { width: targetWidth, height: targetHeight } = targetRef.current!.getBoundingClientRect()

  const centerOffsetX = targetWidth / 2
  const centerOffsetY = targetHeight / 2
  const hsv = color.toHsv()

  return {
    x: hsv.s * width - centerOffsetX,
    y: (1 - hsv.v) * height - centerOffsetY,
  }
}
