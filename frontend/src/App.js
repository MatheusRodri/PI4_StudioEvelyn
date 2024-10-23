import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/home/index.js";
import Login from "./pages/Login/index.js";
import Servicos from "./pages/Servicos/index.js"
import Registro from "./pages/Registro/index.js";

function App() {
  
  return (
    <Router>
        <Routes> 
          <Route exact path="/" element={<Home/>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
    </Router>
  );
}

export default App;
