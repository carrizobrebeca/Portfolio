import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Components/Views/Landing';
import Home from './Components/Pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/home" element={<Home />} />
       
      </Routes>
    </Router>
  );
}

export default App;
