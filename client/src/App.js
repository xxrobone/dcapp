import './App.scss';
import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar/Navbar';
import { RiAdminFill } from 'react-icons/ri'
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <Fragment>
      <Navbar icon={<RiAdminFill />}/>
      <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
      </div>

    </Fragment>
  );
}

export default App;
