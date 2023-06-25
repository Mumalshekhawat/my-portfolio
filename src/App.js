import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Home/>} >Home</Route>
      <Route path='/about' element={<About/>} >About</Route>
      <Route path='/contact' element={<Contact/>} >Contact</Route>
      <Route path='/projects' element={<Projects/>} >Projects</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
