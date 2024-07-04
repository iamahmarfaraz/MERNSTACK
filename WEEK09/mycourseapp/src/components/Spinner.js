import React from 'react'
import { tailChase } from 'ldrs'

tailChase.register()

// Default values shown


const Spinner = () => {
  return (
    <div>
        {/* <div className="spinner"></div> */}
        <l-tail-chase
        size="40"
        speed="1.75" 
        color="#8A65F1" 
        ></l-tail-chase>
        <p>Loading....</p>
    </div>
  )
}

export default Spinner