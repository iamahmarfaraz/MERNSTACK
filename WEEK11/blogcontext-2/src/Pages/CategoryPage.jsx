import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='w-11/12 mx-auto max-w-[670px] py-8  mt-[70px] mb-[70px] flex flex-col 
     justify-center items-center'>
      <Header/>
      <div className='flex w-full flex gap-x-7'>
        <button
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2 className='flex justify-center items-center text-3xl font-bold'> 
            Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
