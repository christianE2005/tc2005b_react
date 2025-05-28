import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => { 
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = async(e) => {
    e.preventDefault();
    if(!username){
      alert("Ingresar username por favor");
      return;
    }
    const isLoggedIn = await login({username, password});
    if (isLoggedIn) {
        navigate("/home");
    }
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
