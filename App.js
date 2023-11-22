import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Contactus from "./components/Contactus";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/counter" element={<Counter/>}></Route>
          <Route exact path='/contact' element={<Contactus/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
