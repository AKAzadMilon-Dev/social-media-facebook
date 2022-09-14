import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Login from "./pages/login/Index";
import Profile from "./pages/profile/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/profile" element={<Profile />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
