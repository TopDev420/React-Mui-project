import './App.css';
import './assets/style/common.css'

import Navbars from './components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Home />
    </div>
  );
}

export default App;
