import React from 'react'
import LazyLoad from '../../components/lazyLoad/LazyLoad'

function loadLazyPage() {
  return (
    <div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <LazyLoad
        placeholder="loading..."
        onContentLoaded={() => {
          console.log('loaded')
        }}
      >
        <div>hhhhhhhhhhhhhhhhh</div>
      </LazyLoad>
    </div>
  )
}

export default loadLazyPage
