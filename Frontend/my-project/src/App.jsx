
import About from "./components/About";
import Home from "./components/Home";
import Pages from "./components/Pages";
import News from "./components/News";
import Shop from "./components/Shop";
import Projects from "./components/Projects";
import FooterFour from "./components/FooterFour";

import { NavLink, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div className="">

      <div className="">
     <nav className=" ">
         <ul>
           
            <li className="text-white">
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/pages">Pages</NavLink>
            </li>

            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>

            <li>
              <NavLink to="/news">News</NavLink>
            </li>

            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>

             <li>
              <NavLink to="/FooterFour">Footer</NavLink>
            </li> 
      
         </ul>
      </nav>
      </div>
        

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/pages" element={<Pages/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/FooterFour" element={<FooterFour/>}></Route>
        </Routes>
 
      {/* <About/> */}
      {/* <FooterFour/> */}

    </div>
  );
}




  
  



