import React, { Component } from 'react';
//import BizAccount from './components/bizaccount';
import Main from './components/main'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
//import {LinkContainer} from 'react-router-bootstrap'
//import {Grid,Table,TableHeaderRow,TableTreeColumn,PagingPanel,TableColumnResizing,Toolbar, TableColumnVisibility,ColumnChooser
//} from "@devexpress/dx-react-grid-bootstrap3";

import './App.css';
//
//npm start
////


//https://www.robinwieruch.de/local-storage-react/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,
      productos:null,
      config:null };
  }
  
  render() {
    return(
      <Router>
      <div>
       <Main></Main>
      </div>
      </Router>
    )
  }
}

export default App;
