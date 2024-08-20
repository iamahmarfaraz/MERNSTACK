import React from 'react'
import { tailChase } from 'ldrs'
import "./Spinner.css"

tailChase.register()

// Default values shown


const Spinner = () => {
  return (
    <div className='mt-48 mb-24 flex justify-center items-center h-full '>
        {/* <div className="spinner"></div> */}
        {/* <l-tail-chase
        size="40"
        speed="1.75" 
        color="#8A65F1" 
        ></l-tail-chase> */}
        <div className="loader"></div>
        
    </div>
  )
}

export default Spinner