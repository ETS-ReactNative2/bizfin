import React, { Component } from 'react';
import { Navbar,NavbarBrand,Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
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
        <div key={producto.id} className="col-12 col-md-5 m-1">
          <Card tag="li">
           
                <CardImg width="100%" src={producto.image} alt={producto.name} />
                <CardImgOverlay>
                     <CardTitle>{producto.name}</CardTitle>
                </CardImgOverlay>
            
          </Card>
        </div>
      );
  });
    return (
      <div >
       
       
      <div className="container">
            <div className="row">
              
                  {menu}
             
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