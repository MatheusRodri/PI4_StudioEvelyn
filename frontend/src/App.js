import UserConsultPage from "./pages/UserConsultPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/home/index.js";

function App() {
  
  return (
    <Router>
        <Routes> 
          <Route exact path="/" element={<Home/>} /> 
          <Route path="/login" element={<UserConsultPage />} /> 
        </Routes>
    </Router>
  );
}

export default App;
