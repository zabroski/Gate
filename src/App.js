// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.js'; 
import Contact from './components/Contact/contact.js';
import Home from './components/Home/home.js';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/> 
      {/* <Contact /> */}
      <main style={{padding: '2rem'}}>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
