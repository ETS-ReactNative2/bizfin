import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import TreeBal from './components/balance'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
           <Navbar.Header pullLeft>
             <Navbar.Brand>
                <a href="#brand">Portal BizFin</a>
             </Navbar.Brand>
           <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
           <Nav>
               <NavItem eventKey={1} href="#">
                  Balance
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Mayor Analitico
                </NavItem>
                <NavDropdown eventKey={3} title="Cuentas" id="basic-nav-dropdown">
                     <MenuItem eventKey={3.1}>Tipo Auxiliar</MenuItem>
                     <MenuItem eventKey={3.2}>Plan de Cuentas</MenuItem>
                     <MenuItem eventKey={3.3}>Plan de Auxiliares</MenuItem>
                     <MenuItem divider />
                     <MenuItem eventKey={3.3}>Estadisticas</MenuItem>
                     </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                   Diario
                </NavItem>
                <NavItem eventKey={2} href="#">
                   Procesos
                </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
        <TreeBal></TreeBal>
      </div>
    );
  }
}

export default App;
