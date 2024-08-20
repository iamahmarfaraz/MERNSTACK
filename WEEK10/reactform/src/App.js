import React, { useState } from 'react';

import './App.css';

function App() {

  // const [fullName, setfullName] = useState("");
  // const [fatherName, setfatherName] = useState("");

  const [formData, setformData] = useState({
    fullName : "",
    fatherName : "",
    email : "",
    comment : "",
    isVisible : false,
    mode : "",
    favCar : ""
  });


  function changeHandler(event){
    const {name,value,type,checked} = event.target;
    setformData(prevformData => {
      return{
        ...prevformData,
        // [event.target.name] : event.target.value
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  // function changeFullNameHandler(e){
  //   setfullName(e.target.value)
  //   console.log("Printing Full Name");
  //   console.log(fullName)
  // }

  // function changeFatherNameHandler(event){
  //   setfatherName(event.target.value);
  //   console.log("Printing Father's Name");
  //   console.log(fatherName);
  // }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form action="" onSubmit={submitHandler}>
        <br />
        <input type="text" placeholder = "Full Name" onChange={changeHandler} name='fullName'
         value={formData.fullName}/>
         <br /> <br />
        <input type="text" placeholder = "Father's Name" onChange={changeHandler}
         name='fatherName' value={formData.fatherName} />
         <br /> <br />
        <input type="email" name="email"  placeholder='Enter your Email' 
        onChange={changeHandler} value={formData.email}/>
        <br /> <br />
        <textarea name="comment" placeholder='Enter your Comment' onChange={changeHandler}
        value={formData.comment}></textarea>
        <br /><br />
        <input type="checkbox" name="isVisible" id='isVisible' onChange={changeHandler} 
        checked={formData.isVisible}/>
        <label htmlFor="isVisible">Check</label>

        <br /><br />
        <input type="radio" name="mode" id="online-mode" onChange={changeHandler} 
        value="online-mode" checked = {formData.mode === "online-mode"}/>
        <label htmlFor="online-mode">Online Mode</label>
        <br /><br />

        <input type="radio" name="mode" id="offline-mode" onChange={changeHandler} 
        value="offline-mode" checked = {formData.mode === "offline-mode"}/>
        <label htmlFor="offline-mode">Offine Mode</label>
        <br /><br />

        <label htmlFor="favCar">Tell me your Favourite Car : </label>
        <select name="favCar" id="favCar" onChange={changeHandler} value={formData.favCar}>
          <option value="Scorpio">Scorpio</option>
          <option value="Defender">Defender</option>
          <option value="Porsche">Porsche</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Aston Martin">Aston Martin</option>
        </select>

        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}


export default App;
