
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import AllProject from './components/AllProject/AllProject';
import Footer from './components/Shared/Footer/Footer';
import Resume from './components/Resume/Resume';
import DetailProject from './components/DetailProject/DetailProject';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/project' element={<AllProject></AllProject>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/detailProject/:id' element={<DetailProject></DetailProject>}></Route> 
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
