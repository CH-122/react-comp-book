import React, { useRef, MouseEventHandler, useEffect } from 'react'

function Distance() {
  const ref = useRef<HTMLDivElement>(null)

  const clickHandler: MouseEventHandler<HTMLDivElement> = e => {
    const top = document.getElementById('box')!.getBoundingClientRect().top

    console.log('box pageY', e.pageY)
    console.log('box clientY', e.clientY)
    console.log('box offsetY', e.pageY - top - window.scrollY)
    console.log('box screenY', e.screenY)
  }

  useEffect(() => {
    console.log('offsetTop', ref.current?.offsetTop)
    console.log('clientTop', ref.current?.clientTop)
  }, [])

  function getTotalOffsetTop(element: HTMLElement) {
    let totalOffsetTop = 0
    while (element) {
      if (totalOffsetTop > 0) {
        totalOffsetTop += element.clientTop
      }
      totalOffsetTop += element.offsetTop
      element = element.offsetParent as HTMLElement
    }
    return totalOffsetTop
  }

  return (
    <div
      style={{
        position: 'relative',
        margin: '100px',
        padding: '200px',
        border: '1px solid blue',
      }}
    >
      <div
        id="box"
        ref={ref}
        style={{
          border: '20px solid #000',
          width: '100px',
          height: '100px',
          background: 'pink',
        }}
      ></div>
    </div>
  )
}

export default Distance
