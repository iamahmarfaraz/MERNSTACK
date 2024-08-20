
import './App.css';
import { Route,Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Lab from './components/Lab';
import Login from './components/Login';
import Notfound from './components/Notfound';
import Support from './components/Support';
import MainHeader from './components/MainHeader';
import { Link,NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Lab</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path='/' element={<div>Home Page</div>}></Route>
        <Route path='/about' element={<div>About Us</div>}></Route>
        <Route path='/support' element={<div>Support Page</div>}></Route>
        <Route path='/lab' element={<div>Lab Page</div>}></Route>
        <Route path='/login' element={<div>Login Page</div>}></Route>
        <Route path='*' element={<div>Page Not Found</div>}></Route> */}

        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}></Route>  
          <Route path='/about' element={<About/>}></Route>
          <Route path='/support' element={<Support/>}></Route>
          <Route path='/lab' element={<Lab/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
