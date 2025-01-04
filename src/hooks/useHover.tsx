import React, { useState, ReactElement } from 'react'
import { cloneElement } from 'react'

export type HoverElement = ((state: boolean) => ReactElement) | ReactElement

const useHover = (element: HoverElement): [ReactElement, boolean] => {
  const [state, setState] = useState(false)

  const onMouseEnter = (originalOnMouseEnter?: any) => (event: any) => {
    originalOnMouseEnter?.(event)
    setState(true)
  }

  const onMouseLeave = (originalOnMouseLeave?: any) => (event: any) => {
    originalOnMouseLeave?.(event)
    setState(false)
  }

  if (typeof element === 'function') {
    element = element(state)
  }

  const el = cloneElement(element as ReactElement, {
    onMouseEnter: onMouseEnter((element as ReactElement).props?.onMouseEnter),
    onMouseLeave: onMouseLeave((element as ReactElement).props?.onMouseLeave),
  })

  return [el, state]
}

export default useHover
