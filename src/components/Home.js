import React from 'react'
import Duimpie from "../Images/DUIMPIE.png"

function Home() {
  return (
    <div className='grey-background'>
        <div className='weather-background'>
            <div className='welcome-background'>
                <h1>Borat rolled</h1>
                  <div className='image'><img src={Duimpie}></img></div>
            </div>
        </div>
    </div>
  )
}

export default Home