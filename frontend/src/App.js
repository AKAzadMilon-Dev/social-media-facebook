import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/registration";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/registration" element={<Registration />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
