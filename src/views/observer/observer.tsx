import React from 'react'
import './observer.scss'
import { useEffect, useRef } from 'react'
import useHover from '../../hooks/useHover'
import useScroll from '../../hooks/useScroll'

// const intersectionObserver = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       console.log(entry.target, entry.intersectionRatio)
//     })
//   },
//   {
//     threshold: [0.5, 1],
//   }
// )

function Observer() {
  // useEffect(() => {
  //   intersectionObserver.observe(document.getElementById('box1') as HTMLElement)
  //   intersectionObserver.observe(document.getElementById('box2') as HTMLElement)
  // }, [])

  const [hoverElement, isHover] = useHover(<div>hover</div>)

  const ref = useRef<HTMLDivElement>(null)
  const isScroll = useScroll(ref)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {hoverElement}
      {isHover ? 'hovering' : 'not hovering'}
      {isScroll ? 'scrolling' : 'not scrolling'}

      <div className="w-[100px] h-[100px]  overflow-y-scroll" ref={ref}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      <div id="box1"></div>
      <div id="box2"></div>
    </div>
  )
}

export default Observer
