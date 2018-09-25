import React, { Component } from 'react';
import { Navbar,NavbarBrand,Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import logo from '../logo.png';
import MapBiz from '../components/map';

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
            <MapBiz></MapBiz>     
      </div>



     
      </div>
      );
    }
  }

export default BizAccount;
/*

*/