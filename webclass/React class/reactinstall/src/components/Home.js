import React from 'react'

function Home(props) {
  return (
    <div>
        {/* Refrencing a Props passed to a Functioncomponent */}
        {props.age}

        <h1>This is my Home Page</h1>
        <h2>This is Nigeria 99 </h2>
    </div>
  )
}

export default Home