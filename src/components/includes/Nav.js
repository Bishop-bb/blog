import {Link, NavLink} from 'react-router-dom';
import './../../App.css';
import Home from '../../pages/Home';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import RegistrationPage from '../../pages/RegistrationPage';
import style from './Nav.module.css';



function Nav() {
    
   return (
     <header>


<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Bishop</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" >Registration</Link>
        </li>
        <li class="nav-item">
        <Link to="LoginPage">Login</Link>
        </li>
        <li class="nav-item">
        <Link to="/ProductsPage" >Blogs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>






        {/* <nav className={style.navBar}>
      <ul>
     
      <li> <Link to="/" >Registration</Link> </li> 

     <li><Link to="LoginPage">Login</Link></li>
     <li><Link to="/ProductsPage" >Blogs</Link></li>
    
      </ul>
        </nav> */}
     </header>
  )
}

export default Nav