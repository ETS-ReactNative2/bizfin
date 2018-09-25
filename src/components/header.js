import React, { Component } from "react";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron }
 from 'reactstrap';
 import {NavLink} from 'react-router-dom'
import logo from '../logo.png';
class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
                  
            <NavbarBrand className="mr-auto" href="/">
             <img src={logo} height="30" alt="Plataforma BizAccount" />  
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                  <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/tipoauxiliares">
                  <span className="fa fa-info fa-lg"></span>Tipos
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/cuentas">
                  <span className="fa fa-home fa-lg"></span>Cuentas
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/auxiliares">
                  <span className="fa fa-home fa-lg"></span>Auxiliares
                  </NavLink>
              </NavItem>

            </Nav>
          
            
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Sistemas BizAccount</h1>
                       <p>Mas de 200 annos construyendo una app</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;