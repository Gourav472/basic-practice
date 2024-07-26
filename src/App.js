import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Herosection from './components/Herosection';
import { Route, Routes } from 'react-router-dom';
import About from './Page/About';
import ContactUs from './Page/ContactUs';
import LoginForm from './components/LoginForm';
import UseEffect from './components/UseEffect';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Herosection />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
      <LoginForm />
      <UseEffect/>
    </>
  );
}

export default App;
