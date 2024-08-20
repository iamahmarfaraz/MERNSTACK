import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto max-w-[670px] py-8  mt-[10px] mb-[70px] flex flex-col 
    gap-y-7 justify-center items-center'>
      <Header/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
