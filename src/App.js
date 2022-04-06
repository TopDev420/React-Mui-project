import './App.css';
import './assets/style/common.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbars from './components/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Navbars />
        <Routes >
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Home />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
