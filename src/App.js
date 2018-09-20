import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid,Table,TableHeaderRow,TableTreeColumn,PagingPanel,TableColumnResizing,Toolbar, TableColumnVisibility,ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap3";

import TreeBal from './components/balance'
import MayAna from './components/mayana'
import TipoAuxi from './components/tipo'
import Cuentas from './components/cuentas'
import Auxiliares from './components/auxiliares'
import logo from './logo.png';
import './App.css';

const HomeView =()=>(
  <h1>Aqui tendremos algunas Noticias...</h1>
)

const Desarrollo =()=>(
  <h1>En Desarrollo</h1>
)
//https://www.robinwieruch.de/local-storage-react/
const Login=()=>(
  <div>
  <h1>Autenticacion al Portal BizFin</h1>
  <p>
 Introduzca el usuario y contraseña
  </p>

  <form onSubmit={this.onSearch}>
    <input type="text" ref={node => this.input = node} />
    <button type="submit">Click</button>
  </form>
  </div>
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,
      config:{ip:"111.111.111.11"} };
  }
  
  onSearch = (e) => {
    console.log("onSearch")
    e.preventDefault();
    const { value } = this.input;
    console.log(value)
    this.setState({flag:1});
    if (value === '') {
      return;
    }
   this.render();
    //fetch('https://hn.algolia.com/api/v1/search?query=' + value)
    //  .then(response => response.json())
    //  .then(result => this.onSetResult(result));
  }
  render() {
    console.log("render...")
    
    console.log(this.state)
    if (this.state.flag===0){
      return(
        <div>
        <img src={logo} className="App-logo"/>  
        <h1>Autenticacion al Portal BizFin</h1>
        <p>
       Introduzca el usuario y contraseña
        </p>
      
        <form onSubmit={this.onSearch}>
          <input type="text" ref={node => this.input = node} />
          <button type="submit">Click</button>
        </form>
        </div>
      )
    }else{
    return (

      <Router>
      <div>
     
      <Navbar inverse collapseOnSelect>
      <Navbar.Header >
        <Navbar.Brand>
           <a href="#brand">Portal BizFin</a>
        </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <LinkContainer exact={true} to="/">
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
        <NavDropdown  title="Cuentas" id="basic-nav-dropdown">
            <LinkContainer  to="/tipoauxiliar">
                <MenuItem >Tipo Auxiliar</MenuItem>        
            </LinkContainer> 
            <LinkContainer  to="/cuentas">
                 <MenuItem >Plan de Cuentas</MenuItem>
            </LinkContainer> 
            <LinkContainer  to="/auxiliares">
               <MenuItem >Plan de Auxiliares</MenuItem>
            </LinkContainer> 
            <LinkContainer  to="/tipoauxiliar">
               <MenuItem >Estadisticas</MenuItem>
            </LinkContainer> 
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
        <LinkContainer  to="/login">
             <NavItem >
                 Login
            </NavItem>        
        </LinkContainer>
      </Nav>
     </Navbar.Collapse>
   </Navbar>
   
   <Route exact path="/" component={HomeView}/>
   <Route  path="/balance" component={TreeBal}/>
   <Route  path="/analitico" component={MayAna}/>
   <Route  path="/tipoauxiliar" component={TipoAuxi}/>
   <Route  path="/cuentas" component={Cuentas} />
   <Route  path="/auxiliares" component={Auxiliares} />
   <Route  path="/diario" component={Desarrollo}/>
   <Route  path="/procesos" component={Desarrollo}/>
   <Route  path="/login" component={Login}/>

     </div>
     </Router>
    );
    }
  }
}

export default App;
//<TreeBal></TreeBal>