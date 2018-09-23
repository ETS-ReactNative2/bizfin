import React, { Component } from 'react';
import BizAccount from './components/bizaccount';
import MapBiz from './components/map';
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'

import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Grid,Table,TableHeaderRow,TableTreeColumn,PagingPanel,TableColumnResizing,Toolbar, TableColumnVisibility,ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap3";
import {productos} from './data/productos.json';
import TreeBal from './components/balance'
import MayAna from './components/mayana'
import TipoAuxi from './components/tipo'
import Cuentas from './components/cuentas'
import Auxiliares from './components/auxiliares'
import logo from './logo.png';

import './App.css';
//
//https://www.coursera.org/lecture/front-end-react/exercise-video-header-and-footer-7abwF
const HomeView =()=>(
  <div>
  <img src={logo} className="App-logo"/>  
  <h1>Aqui tendremos algunas Noticias...</h1>
  </div>
)
const trama="3083,fuentes,72,1,server=206.72.117.220;driver={sql server};uid=fuentes2015log;pwd=fuentes2015pwd123$;database=fuentes2015;,FUENTES2015,http://Bizaccount.net/Biz2015/PreHome.asp,"
const Desarrollo =()=>(
  <h1>En Desarrollo</h1>
)

//https://www.robinwieruch.de/local-storage-react/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,
      productos:productos,
      config:null };
  }
  
  onSearch = (e) => {
    alert('The value is: ' + this.login.value+'  '+this.pwd.value);
    this.refs.myForm.submit();
    console.log("onSearch")
    e.preventDefault();
    const { value } = this.login;
    console.log(value)
    this.setState({flag:1});
    fetch('http://nodebiz.azurewebsites.net/autenticacion')
      .then(response => response.json())
      .then(result => this.onSetResult(result, value));
    if (value === '') {
      return;
    }
    //https://www.robinwieruch.de/local-storage-react/
 //https://carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/
  }
  onSetResult = (result, key) => {
    
    console.log(result)
    result.server="serverip"
    result.user="userrrrrr"
    result.password="password"
    result.ip="xxx.xxx.xxx.xxx"
    result.pwd="pppaaawwwwd"
    alert(JSON.stringify(result))
    //localStorage.setItem(key, JSON.stringify(result.hits));
    this.setState({ hits: result.hits });
    this.setState({ flag:1 });
   
  }
  
  render() {
    
  
    console.log("render...")
    
    console.log(this.state)
    //3083,fuentes,72,1,server=206.72.117.220;driver={sql server};uid=fuentes2015log;pwd=fuentes2015pwd123$;database=fuentes2015;,FUENTES2015,http://Bizaccount.net/Biz2015/PreHome.asp,
    if (this.state.flag===0){
      return(
   
        <div className= "App">
        
         <Navbar dark color="primary">
          <div className="container">
          <img src={logo} className="App-logo" alt="logo" />   
            <NavbarBrand href="/">BizAccount su Constructor de Cuentas y Costos de Obras </NavbarBrand>
          </div>
        </Navbar>
           <BizAccount productos={this.state.productos}></BizAccount>
        <h2>Autenticacion al Portal BizFin</h2>
        
        <form ref='myForm' name="t" id="t" action="http://bizaccount.net/Biz2015/PreHome.asp" method="post" > 
           <input type="hidden" name="trama" value="3083,fuentes,72,1,server=206.72.117.220;driver={sql server};uid=fuentes2015log;pwd=fuentes2015pwd123$;database=fuentes2015;,FUENTES2015,http://Bizaccount.net/Biz2015/PreHome.asp," />
           <input type="Submit" />
       </form>

        <form onSubmit={this.onSearch}>
        <label>
          Usuario:
          <input type="text" ref={login => this.login = login} />
          </label>
          <label>
          Password:
          <input type="text" ref={pwd => this.pwd = pwd} />
          </label>
          <button type="submit">Click</button>
        </form>
        
           <header className="App-header">
                    
          <h3 className="App-title">Quienes Somos</h3>
        </header>  
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
   <Route  path="/login" component={Desarrollo}/>

     </div>
     </Router>
    );
    }
  }
}

export default App;
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