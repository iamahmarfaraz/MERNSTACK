import React,{useEffect,useState} from 'react'
import './App.css';

function App() {

  const [text,setText] = useState('');

  // variation 1 -> for every render
  // useEffect(() => {
  //     console.log("UI RENDERED");
  // });


  // Variation2 -> Only for First Render
  // useEffect(() => {
  //     console.log("UI RENDERED");
  // },[]);

  
  // Variation 3 -> on First Render + whenever dependencies changes
  // useEffect(() => {
  //  console.log("Text Changed")
  // //  This will run whenever there is a change in text
  // // U can pass Multiple Dependencies
  // }, [text]);


  // Variation 4 -> before adding eventlistener it checks whether they have 
  //eventlistener before or not ,improvising ur performance
  useEffect(() => {
    console.log("Listener Added");
  
    return () => {
      console.log("Listener Removed");
    }

    // in this line34 will get executed first then line31 will get executed
  }, [text]);


  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
