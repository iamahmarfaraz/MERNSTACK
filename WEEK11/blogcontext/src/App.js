import React, { useContext } from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import Page from './components/Page';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
import "./App.css"


const App = () => {

  const {fetchBlogData} = useContext(AppContext);

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className='flex flex-col w-full h-full gap-y-1 justify-center items-center'>
      <Header></Header>
      <Blog></Blog>
      <Page></Page>
      
    </div>
  )
}

export default App;

