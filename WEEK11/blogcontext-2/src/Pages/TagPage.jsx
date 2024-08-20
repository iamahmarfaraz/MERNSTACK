import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='w-11/12 mx-auto max-w-[670px] py-8  mt-[60px] mb-[70px] flex flex-col 
    gap-y-7 justify-center items-center'>
        <Header/>
        <div className='flex flex-row'>
            <button 
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
