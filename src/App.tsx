import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Scene from './components/three/Scene'

gsap.registerPlugin(TextPlugin)

function App() {

  const words = [
    { text: 'Vuejs', color: 'green' },
    { text: 'Reactjs', color: '#0288D1' },
    { text: 'Threejs', color: 'brown' },
  ]
  const wordRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
  // gsap
  let masterTl = gsap.timeline({ repeat: -1 })
  words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to(wordRef.current, { duration: 1, text: word.text, color: word.color })
    masterTl.add(tl)
  })

  gsap.to(cursorRef.current, { yoyo: true, repeat: -1, opacity: 0 })
  },[])

  return (
    <div className="App">
       <div className='title'>
        <div className='content-1'>
          Hi There,
        </div>
        <div className='content-2'>
          My name is Shekoni Shakiru.
        </div>
        <div>
          <span className='content-3'>These are my Frontend stacks </span><br />
          <span className='text' ref={wordRef}></span>
          <span className='cursor' ref={cursorRef}></span>
        </div>
       </div>
      <div className='canvas-id'>
      <Scene />
      </div>
    </div>
  )
}

export default App
