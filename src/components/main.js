import React, { Component } from 'react';
import BizAccount from '../components/bizaccount';
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'

import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid,Table,TableHeaderRow,TableTreeColumn,PagingPanel,TableColumnResizing,Toolbar, TableColumnVisibility,ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap3";

import {productos} from '../data/productos.json';
import Header from  '../components/header'
import Footer from  '../components/footer'
import Login from  '../components/login'

import TreeBal from '../components/balance'
import MayAna from '../components/mayana'
import TipoAuxi from '../components/tipo'
import Cuentas from '../components/cuentas'
import Auxiliares from '../components/auxiliares'
import About from '../components/about'
import logo from '../logo.png';


//
//npm start
////
//https://www.coursera.org/lecture/front-end-react/exercise-video-header-and-footer-7abwF
const HomeView =()=>(
  <div>
  <img src={logo} className="App-logo"/>  
  <h1>Aqui tendremos algunas Noticias...</h1>
  </div>
)
   
const Desarrollo =()=>(
  <h1>En Desarrollo</h1>
)

//https://www.robinwieruch.de/local-storage-react/

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,
      productos:productos,
      config:null };
  }
  
  render() {
    
  
    const HomePage=()=>{return(
      <div>bizzz</div>
      )
    }
    if (this.state.flag===0){
      return(
  
       
        <Router>
           <div className= "App">
            <Header></Header>
            <Switch>
                <Route path="/home" component={()=><BizAccount productos={this.state.productos}/>}/>
                <Route path="/balance" component={TreeBal}/>
                <Route path="/tipoauxiliares" component={TipoAuxi}/>
                <Route path="/cuentas" component={Cuentas}/>
                <Route path="/auxiliares" component={Auxiliares}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={About}/>
                <Redirect to="/home"/>
            </Switch>
           
          
           
           </div>
        </Router>
        
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
   <Route  path="/login" component={Desarrollo}/>

     </div>
     </Router>
    );
    }
  }
}

export default Main;
//<TreeBal></TreeBal>
/*
https://www.reddit.com/r/reactjs/comments/5x6kku/how_do_i_post_form_data_and_redirect_to_handler/
handler = (e) => {
    // do some validation
    this.refs.myForm.submit();
};

const Form = () => (
   <form ref='myForm' action='/other-page.html'>
   <input id="foo" type="text">
  <input type="Submit" />
  </form>
);
*/