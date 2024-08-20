import React from "react";
import { useNavigate } from "react-router-dom";

const Lab = () => {

    const navigate = useNavigate();

    function backHandler(){
        navigate(-1);
    }

  return (
    <div>
      <div>Lab Page</div>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default Lab;
