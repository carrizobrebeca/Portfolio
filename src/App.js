import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Components/Views/Landing';
import Home from './Components/Pages/Home';
import ReviewForm from './Components/Pages/ReviewForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/reviewform" element={<ReviewForm />} />
       
      </Routes>
    </Router>
  );
}

export default App;
