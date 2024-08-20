import React from 'react'
import { tailChase } from 'ldrs'
import "./Spinner.css"

tailChase.register()

// Default values shown


const Spinner = () => {
  return (
    <div className='mt-20 mb-24'>
        {/* <div className="spinner"></div> */}
        {/* <l-tail-chase
        size="40"
        speed="1.75" 
        color="#8A65F1" 
        ></l-tail-chase> */}
        <div className="section-center flex flex-col gap-2">
          <div className="section-path">
            <div className="globe">
              <div className="wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <p className='text-[16px]'>Loading....</p>
        </div>
        
    </div>
  )
}

export default Spinner