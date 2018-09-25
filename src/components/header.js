import React, { Component } from "react";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron,NavDropdown }
 from 'reactstrap';
 import { MenuItem} from 'react-bootstrap'
 import {NavLink} from 'react-router-dom'
 import {LinkContainer} from 'react-router-bootstrap'
import logo from '../logo.png';
class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar inverse expand="md">
                  
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
          
            
           
      </Navbar>
      
    </React.Fragment>
    );
  }
}

export default Header;