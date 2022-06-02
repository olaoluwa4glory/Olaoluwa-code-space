import React from 'react'
import Home from './Home'

function About() {
  return (
    <div>
        This is about me and you
        {/* Passing a Props to a component */}
        <Home age = 'I am 37 years old'/>
    </div>
  )
}

export default About