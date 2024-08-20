import React, { useEffect, useImperativeHandle, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif"

//  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
 const API_KEY = "OchHUfkhYLRhMZwnagxQFIQeSW7XYb83";

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [Loading, setLoading] = useState('false ')

  // async function fetchData() {
  //   console.log("API")
  //   console.log(API_KEY);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  const {gif,Loading,fetchData} = useGif()

  function clickHandler() {
    fetchData();
  }

  return (
    <div
      className="w-1/2 bg-green-400 flex flex-col items-center
    gap-y-5 mt-[15px] rounded-lg border border-black relative"
    >
      <h1 className="text-2xl mt-[15px] font-bold  underline uppercase ">A Random Gif</h1>


      {
        Loading === true ? (<Spinner></Spinner>) : (<img src={gif} alt="error" width="450" />)
      }

      
      <button
        onClick={clickHandler}
        className="w-10/12 bg-orange-100 rounded-lg
      text-lg py-2 mb-[20px] "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
