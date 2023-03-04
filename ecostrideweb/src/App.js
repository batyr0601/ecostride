import './App.css';
import Welcome from './pages/Welcome'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <p>WELCOME TO</p>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a href="#intro" class="btn">Get Started</a>
    //     {/* // <Link to="/dashboard">
    //     //   <button type="button">
    //     //         work
    //     //   </button>
    //     // </Link> */}
    //   </header>
    // </div>
  );
}

export default App;
