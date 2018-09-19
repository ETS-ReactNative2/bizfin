import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid,Table,TableHeaderRow,TableTreeColumn,PagingPanel,TableColumnResizing,Toolbar, TableColumnVisibility,ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap3";

import TreeBal from './components/balance'
import MayAna from './components/mayana'
import logo from './logo.svg';
import './App.css';

const HomeView =()=>(
  <h1>Aqui tendremos algunas Noticias...</h1>
)
const HomeView2 =()=>(
  <h1>En Diseño</h1>
)
class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar inverse collapseOnSelect>
      <Navbar.Header pullLeft>
        <Navbar.Brand>
           <a href="#brand">Portal BizFin</a>
        </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <LinkContainer  to="/">
        <NavItem >
             NotiFin
           </NavItem>
        
        </LinkContainer>
        <LinkContainer  to="/balance">
        <NavItem >
             Balance
           </NavItem>
        
        </LinkContainer>  
        <LinkContainer  to="/analitico">
        <NavItem >
             Mayor Analitico
           </NavItem>
        
        </LinkContainer> 
        <NavDropdown eventKey={3} title="Cuentas" id="basic-nav-dropdown">
                     <MenuItem eventKey={3.1}>Tipo Auxiliar</MenuItem>
                     <MenuItem eventKey={3.2}>Plan de Cuentas</MenuItem>
                     <MenuItem eventKey={3.3}>Plan de Auxiliares</MenuItem>
                     <MenuItem divider />
                     <MenuItem eventKey={3.3}>Estadisticas</MenuItem>
                     </NavDropdown>
       </Nav>
       <Nav pullRight>
       <LinkContainer  to="/diario">
        <NavItem >
            Diario
           </NavItem>
        
        </LinkContainer>
        <LinkContainer  to="/procesos">
        <NavItem >
             Procesos
           </NavItem>
        
        </LinkContainer>
            </Nav>
     </Navbar.Collapse>
   </Navbar>
   <Route exact path="/" component={HomeView}/>
   <Route exact path="/balance" component={TreeBal}/>
   <Route exact path="/analitico" component={MayAna}/>
   <Route exact path="/diario" component={HomeView2}/>
   <Route exact path="/procesos" component={HomeView2}/>

     </div>
     </Router>
    );
  }
}

export default App;
//<TreeBal></TreeBal>