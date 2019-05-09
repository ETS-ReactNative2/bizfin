import React, { Component } from 'react';
import { Navbar,NavbarBrand,Media,Row,Col,
  Carousel,CarouselItem, CarouselControl,  CarouselIndicators,  CarouselCaption,
  Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,CardSubtitle,Button, } from 'reactstrap';
  import {carrusel} from '../data/productos.json';
  import {productos} from '../data/productos.json';
//import MapBiz from '../components/map';
import Footer from '../components/footer';
import biz0 from '../assests/images/biz1.png'
import biz1 from '../assests/images/biz2.png'
import biz2 from '../assests/images/biz3.png'
import biz3 from '../assests/images/biz4.png'
import biz4 from '../assests/images/biz5.png'
import biz5 from '../assests/images/biz6.png'
import biz6 from '../assests/images/biz7.png'
import biz7 from '../assests/images/biz8.png'
let imgs = {
  biz0,biz1,biz2,biz3,biz4,biz5,biz6,biz7
  
};
function getImage(key) {
  return imgs[key];
}
//https://reactstrap.github.io/components/carousel/
//https://blackrockdigital.github.io/startbootstrap-modern-business/
//https://codepen.io/alexdevero/pen/JYpMEO
//https://www.youtube.com/watch?v=8q2zf9pFiQ4&t=238s
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       activeIndex: 0,
       

      
      };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === carrusel.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? carrusel.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  
  render() {
    let { activeIndex ,flag0} = this.state;

    const slides = carrusel.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });


 
  return (
    <div className="container-fluid">
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={carrusel} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      <h1>
      <span  className="badge badge-secondary">{"Productos y Servicios"}</span>
      </h1>
      <div className="container-fluid" >   
        <div className="d-flex flex-row">                    
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card-deck">
            {productos.map(function(item,index){
                    
                    if (index==0){                
                    return (<ContentItem item={item} src={biz0} key={item.id} />)
                    }
                    if (index==1){                
                      return (<ContentItem item={item} src={biz1} key={item.id} />)
                    }
                    if (index==2){                
                      return (<ContentItem item={item} src={biz2} key={item.id} />)
                      }
                    
                    if (index==3){                
                      return (<ContentItem item={item} src={biz3} key={item.id} />)
                      }
                    
                    if (index==4){                
                      return (<ContentItem item={item} src={biz4} key={item.id} />)
                      }
                      if (index==5){                
                        return (<ContentItem item={item} src={biz5} key={item.id} />)
                      }
                      if (index==6){                
                        return (<ContentItem item={item} src={biz6} key={item.id} />)
                        }
                      
                      if (index==7){                
                        return (<ContentItem item={item} src={biz7} key={item.id} />)
                        }
                      }
                 
                 )}
         </div>
       </div>       
     </div>
    </div> 

  
   <Footer/> 
      </div>
     
      );
    }
  }
  class ContentItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { image:this.props.src };
     }
    render(){
      let {image} = this.state;
      return(
       
        <Row >

         <Col xs="4" sm="4" ms="4" lg="4">
           <Card style={{ width: "18rem" }}>
           <CardImg top width="100%" src={image}  alt="Card image cap" />
            <CardBody>
              <CardTitle className="font-weight-bold">
              {this.props.item.name}
              </CardTitle>
             
              <CardText>
              {this.props.item.description}
              </CardText>
            
            </CardBody>
           </Card>
         </Col>
        </Row>
      )
    }

}
export default Home;
//<CardImg top width="100%" src={this.props.item.image} alt="Card image cap" />