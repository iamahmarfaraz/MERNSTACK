import Random from "./components/Random";
import Tag from "./components/Tag"


export default function App() {
  return (
  <div className="background w-full min-h-screen flex flex-col items-center relative">
    <h1 className=" bg-white rounded-lg text-center mt-[40px]
     py-2 px-10 text-4xl font-bold w-11/12">RANDOM GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
      <Random/>
      <Tag/>
    </div>
  </div>
);
}
