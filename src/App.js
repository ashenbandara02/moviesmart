import './App.css';
import 'react-slideshow-image/dist/styles.css'


import { Navigate, Route, Routes } from "react-router-dom";
import CategoriesList from "./components/Categories";

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import PictureOne from './components/Background';
import TypeSection from './components/TypeSection';
import PerMovie from './components/PerMovie';
import Page404 from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route index element={<Navigate replace={true} to="/home"/>}/>
          <Route path='/home' element={<PictureOne/>}/>
          <Route path='/movies' element={<CategoriesList/>}/>
          {/* <Route path='/contact-us'/> */}
          <Route path='/categories/:type' element={<TypeSection/>}/>
          <Route path='/film' element={<PerMovie/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      
      <Footer/>
    </div>
  );
}


export default App;
