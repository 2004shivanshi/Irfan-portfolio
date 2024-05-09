'use client'
import React, { useEffect, useRef } from 'react'
import { useHorizontalScroll } from './function';

const Horizontal = () => {
  
      const scrollRef = useHorizontalScroll();
  return (
    <main ref={scrollRef} style={{ width: 300, overflow: "auto" }}>
    <div style={{ whiteSpace: "nowrap" }}>
      I will definitely overflow due to the small width of my parent container
    </div>
  </main>
  )
}

export default Horizontal
