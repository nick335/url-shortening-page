import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'


export default function Main(){
  return(
    <main className='main'>
      <div className='main-div'>
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
    </main>
  )
}