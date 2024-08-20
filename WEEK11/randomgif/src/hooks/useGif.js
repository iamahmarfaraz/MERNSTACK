import React, { useEffect, useState } from "react";
import axios from "axios";

//  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
 const API_KEY = "OchHUfkhYLRhMZwnagxQFIQeSW7XYb83";
 const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Tag = (tagInput) => {
  const [gif, setGif] = useState("");
  const [Loading, setLoading] = useState('false ');
//   const [tagInput, settagInput] = useState('');

  async function fetchData() {
    console.log("API")
    console.log(API_KEY);
    
    try {
      setLoading(true);
      const response = await axios.get(tagInput ? `${url}&tag=${tagInput}`  : url);
      console.log(response);
      const imageSource = response?.data?.data?.images?.original?.url;
      console.log(imageSource);
      
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
    // settagInput('');
  }

  return{gif,Loading,fetchData};
};

export default Tag;

