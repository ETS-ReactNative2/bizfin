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
    constructor(props) {
        super(props);    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
  render() {
    return(
       <div>
      <Navbar dark expand="md"> 
      <div className="container">
      <NavbarToggler onClick={this.toggleNav} />   
            <NavbarBrand className="mr-auto" href="/">
             <img src={logo} height="30" alt="Plataforma BizAccount" />  
            </NavbarBrand> 
            <Collapse isOpen={this.state.isNavOpen} navbar>           
            <Nav navbar>
              <NavItem>
                  <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home"></span>Home
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/tipoauxiliares">
                  <span className="fa fa-thumb-tack"></span>Tipos
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/cuentas">
                  <span className="fa fa-cog"></span>Cuentas
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/auxiliares">
                  <span className="fa fa-cogs"></span>Auxiliares
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/login">
                  <span className="fa fa-key"></span>Login
                  </NavLink>

              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info-circle"></span>About
                  </NavLink>

              </NavItem>
            </Nav>
            </Collapse>
            
            </div>      
      </Navbar>
     </div>     
    
    );
  }
}

export default Header;