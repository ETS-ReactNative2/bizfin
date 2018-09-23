import React, { Component } from 'react';
import { Navbar,NavbarBrand,Media } from 'reactstrap';
import logo from '../logo.png';
import MapBiz from '../components/map';
import biz1 from '../assets/images/biz1.png';

class BizAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dishes:null     
    };
  }

  
  render() {
    const menu = this.props.productos.map((producto) => {
      return (
        <div key={producto.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
                <Media object src={producto.image} alt={producto.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{producto.name}</Media>
              <p>{producto.description}</p>
            </Media>
          </Media>
        </div>
      );
  });
    return (
      <div >
       
       
      <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>      
      </div>
         
          <table><tr>
        <td><MapBiz></MapBiz></td><td> <img src={biz1} className="App-Biz" alt="logo" /> </td>
        </tr></table>
          </div>
      );
    }
  }

export default BizAccount;
/*

*/