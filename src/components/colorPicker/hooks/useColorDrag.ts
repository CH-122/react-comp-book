import { Color } from '../color'
import { TransformOffset } from '../Transform'
import { useState, useRef, useEffect } from 'react'

type EventType = MouseEvent | React.MouseEvent<Element, MouseEvent>

type EventHandle = (event: EventType) => void

interface UseColorDragProps {
  offset?: TransformOffset
  containerRef: React.RefObject<HTMLDivElement>
  targetRef: React.RefObject<HTMLDivElement>
  direction?: 'x' | 'y'
  onDragChange?: (offset: TransformOffset) => void
  color?: Color
  calculate?: () => TransformOffset
}

function useColorDrag(props: UseColorDragProps): [TransformOffset, EventHandle] {
  const { offset, containerRef, targetRef, direction, onDragChange, color, calculate } = props

  const [offsetValue, setOffsetValue] = useState(offset || { x: 0, y: 0 })

  const dragRef = useRef({ flag: false })

  useEffect(() => {
    if (!dragRef.current.flag) {
      const calcOffset = calculate?.()
      if (calcOffset) {
        setOffsetValue(calcOffset)
      }
    }
  }, [color])

  useEffect(() => {
    const onGlobalMouseUp = () => {
      console.log('onGlobalMouseUp')
      document.removeEventListener('mousemove', onDragMove)
      dragRef.current.flag = false
    }

    document.addEventListener('mousemove', () => {
      if (dragRef.current.flag) {
        containerRef.current!.addEventListener('mousemove', onDragMove)
      }
    })
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onGlobalMouseUp)

    return () => {
      document.removeEventListener('mousemove', onDragMove)
      document.removeEventListener('mouseup', onGlobalMouseUp)
    }
  }, [])

  const updateOffset: EventHandle = event => {
    // 页面偏移量
    const scrollOffsetX = document.documentElement.scrollLeft || document.body.scrollLeft
    const scrollOffsetY = document.documentElement.scrollTop || document.body.scrollTop

    // 鼠标具体窗口的位置
    const pageX = event.pageX - scrollOffsetX
    const pageY = event.pageY - scrollOffsetY

    // 容器位置和大小
    const {
      x: rectX,
      y: rectY,
      width: rectWidth,
      height: rectHeight,
    } = containerRef.current!.getBoundingClientRect()

    // 拖动元素大小
    const { width: targetWidth, height: targetHeight } = targetRef.current!.getBoundingClientRect()

    const handleHalfWidth = targetWidth / 2
    const handleHalfHeight = targetHeight / 2

    // 滑块距离容器左上角的距离
    const OffsetX = Math.max(0, Math.min(pageX - rectX, rectWidth)) - handleHalfWidth
    const OffsetY = Math.max(0, Math.min(pageY - rectY, rectHeight)) - handleHalfHeight

    const calcOffset = {
      x: OffsetX,
      y: direction === 'x' ? offsetValue.y : OffsetY,
    }

    setOffsetValue(calcOffset)

    onDragChange?.(calcOffset)
  }

  const onDragMove: EventHandle = event => {
    if (!dragRef.current.flag) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    updateOffset(event)
  }

  const onMouseDown: EventHandle = event => {
    console.log('onMouseDown', event.button)
    if (event.button === 0) {
      // containerRef.current!.addEventListener('mousemove', onDragMove)
      dragRef.current.flag = true
    }
    event.preventDefault()
    event.stopPropagation()
  }

  const onDragStart: EventHandle = event => {
    // containerRef.current!.addEventListener('mousemove', onDragMove)
    // document.addEventListener('mouseup', onDragStop)
    // dragRef.current.flag = true
  }

  return [offsetValue, onDragStart]
}

export default useColorDrag
