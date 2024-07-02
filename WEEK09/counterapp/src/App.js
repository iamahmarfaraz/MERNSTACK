import React,{useState} from 'react';
import "./App.css";

function App() {
  // let count = 0;

  const [count,setCount] = useState(0);



  function decreaseHandler(){
    console.log('Counter Decreased');
    setCount(count - 1);

  }

  function increaseHandler(){
    console.log('Counter Increased');
    setCount(count + 1);
  }

  function resetHandler(){
    console.log('Counter Reset');
    setCount(0);
  }

  return (
    <div className = "w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 box-border">
      <h1 className = "text-[#0398d4] font-medium text-2xl">Increment     & Decrement</h1>
      <div className = "bg-white flex justify-centre items-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
        <button onClick = {decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
        -
        </button>
        <div className="font-bold gap-12 text-5xl ">
        {count}
        </div>
        <button onClick = {increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
        +
        </button>
      </div>

      <button onClick = {resetHandler} className="bg-[#0398d4] text-white py-2 px-5 rounded-sm text-lg">
      Reset
      </button>


    </div>
  );
}

export default App;
