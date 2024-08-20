import React, { useEffect, useImperativeHandle, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif"

//  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
 const API_KEY = "OchHUfkhYLRhMZwnagxQFIQeSW7XYb83";

const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [Loading, setLoading] = useState('false ');
  const [tagInput, settagInput] = useState('');
  const {gif,Loading,fetchData} = useGif(tagInput);

  // async function fetchData() {
  //   console.log("API")
  //   console.log(API_KEY);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagInput}`;
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(url);
  //     console.log(response);
  //     const imageSource = response?.data?.data?.images?.original?.url;
  //     console.log(imageSource);
      
  //     setGif(imageSource);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  function clickHandler() {
    fetchData();
    // settagInput('');
  }

  function changeHandler(event){
    settagInput(event.target.value); 
  }

  return (
    <div
      className="w-1/2 bg-blue-500 flex flex-col items-center
    gap-y-5 mt-[15px] rounded-lg border border-black relative mb-16"
    >
      <h1 className="text-2xl mt-[15px] font-bold  underline uppercase ">Random {tagInput} Gif</h1>


      {
        Loading === true ? (<Spinner></Spinner>) : (<img src={gif} alt="error" width="450" />)
      }

      <input type="text" className="w-10/12 rounded-lg
      text-lg py-2 text-center mt-[20px]"
      onChange={changeHandler}
      value={tagInput} />
      
      <button
        onClick={clickHandler}
        className="w-10/12 bg-blue-100 rounded-lg
      text-lg py-2 mb-[20px] "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;

