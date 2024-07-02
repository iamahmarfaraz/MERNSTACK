import "./App.css";
import Item from './components/Item1';
// import ItemDate from './components/ItemDate';
import ItemDate1 from './components/Date';
import Card from "./components/Card";


function App() {
  const response = [
    {
      name : "Ahmar"
    },
    {
      name : "Mahnoor"
    },
    {
      name : "Abc"
    },
    {
      name : "Def"
    },
    {
      name : "Ghi"
    }
  ];

  
  return (
    <div>
      <Card>
        <Item name = {response[0].name}></Item>
        <ItemDate1></ItemDate1>
        <Item name = {response[1].name}>
        Love of My Life
        </Item>
        <Item name = {response[2].name}></Item>
        <Item name = {response[3].name}></Item>
        <Item name = {response[4].name}></Item>
      
      <p>New Project</p>
      </Card>
      
    </div>
  );
}

export default App;
