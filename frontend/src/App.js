import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home/index.js";
import Login from "./pages/Login/index.js";

function App() {
  
  return (
    <Router>
        <Routes> 
          <Route exact path="/" element={<Home/>} /> 
          <Route path="/login" element={<Login/>} /> 
        </Routes>
    </Router>
  );
}

export default App;
