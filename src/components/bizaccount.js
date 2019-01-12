import React, { Component } from 'react';
import { Navbar,NavbarBrand,Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

import MapBiz from '../components/map';
import Footer from '../components/footer';
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
      <div>
      <div  className="col-12 col-md-5 m-1">
      <Card tag="li">
       
            <CardImg width="100%" src={'assets/images/biz1.png'} alt={producto.name} />
            <CardImgOverlay>
                 <CardTitle>{"producto.name"}</CardTitle>
            </CardImgOverlay>
        
      </Card>
    </div>
      <div className="container">
            <div className="row">              
                  {menu}             
            </div> 
              
            <Footer></Footer>
      </div>
      </div>
      );
    }
  }

export default BizAccount;
/*

*/