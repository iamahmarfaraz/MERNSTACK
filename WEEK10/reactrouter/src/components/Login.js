import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate("/lab");
    }

  return (
    <div>

      <div>
        Login Page
      </div>

      <button onClick={clickHandler}>Login</button>
    </div>
  )
}

export default Login;
