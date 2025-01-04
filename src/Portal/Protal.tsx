import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  attech?: HTMLElement | string
  children: React.ReactNode
}

const Portal = forwardRef((props: PortalProps, ref) => {
  const { children, attech = document.body } = props

  const container = useMemo(() => {
    const el = document.createElement('div')
    el.className = `portal-wrapper`
    return el
  }, [])

  useEffect(() => {
    const parentElement = getAttachElement(attech)
    parentElement?.appendChild?.(container)

    return () => {
      parentElement?.removeChild?.(container)
    }
  }, [container, attech])

  useImperativeHandle(ref, () => container)

  return createPortal(children, container)
})

export default Portal

function getAttachElement(attech: PortalProps['attech']) {
  if (typeof attech === 'string') {
    return document.querySelector(attech)
  }
  if (typeof attech === 'object' && attech instanceof HTMLElement) {
    return attech
  }
  return document.body
}
