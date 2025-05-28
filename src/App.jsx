import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import AppBar from "./components/appBar"; 
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){ 
  const [isLogin, setIsLogin] = useState(false);

  const login = async (user) => {
    const data = await fetch("http://localhost:5001/Login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user),
    });

    const res = await data.json();
    setIsLogin(res.isLogin);
    return res.isLogin;
  };
  
  const logout = () => {
    setIsLogin(false);
  };

  return (
    <BrowserRouter>
      {isLogin && <AppBar logout={logout}/>}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login login={login} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
