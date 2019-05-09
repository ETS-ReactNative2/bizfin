import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media,CardImg } from 'reactstrap';
import biz3 from '../assests/images/biz3.png'
import libros1 from '../assests/images/libros1.png'
import libros2 from '../assests/images/libros2.png'
import libros3 from '../assests/images/libros3.png'
//import { Link } from 'react-router-dom';
//import {leaderss} from '../data/productos.json';
function Ejemplos(props) {

    return(
        <div className="container">
            

                <div className="row">
                
                <div className="col-12">
               
                    <h3>Ejemplos</h3>
                    
                </div>                
            </div>
                <div className="row row-content">
            
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-alert text-black">Modulos</CardHeader>
                        <CardImg top width="100%" src={biz3}  alt="Card image cap" />
                        
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                    <CardHeader className="bg-alert text-black">Balance de Comprobación</CardHeader>
                        
                    <CardImg top width="100%" src={libros1}  alt="Card image cap" />
                        
                    </Card>
                </div>
                </div>
                

            
            <div className="row row-content">
        
            <div className="col-12 col-md-5">
                <Card>
                    <CardHeader className="bg-alert text-black">Presupuestos</CardHeader>
                    <CardImg top width="100%" src={libros2}  alt="Card image cap" />
                    
                </Card>
            </div>
            <div className="col-12 col-md-5">
                <Card>
                <CardHeader className="bg-alert text-black">Balance de Comprobación</CardHeader>
                    
                <CardImg top width="100%" src={libros3}  alt="Card image cap" />
                    
                </Card>
            </div>
            </div>
        </div>
    );
}

export default Ejemplos; 