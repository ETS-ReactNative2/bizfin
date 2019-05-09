import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media,CardImg } from 'reactstrap';
import biz3 from '../assests/images/biz3.png'
import libros1 from '../assests/images/libros1.png'
import libros2 from '../assests/images/libros2.png'
import libros3 from '../assests/images/libros3.png'
//import { Link } from 'react-router-dom';
//import {leaderss} from '../data/productos.json';
function Servicios(props) {
   // console.log(leaderss)
    //const leaders = leaderss.map((leader) => {
    //    return (
    //        <p>Leader {leader.name}</p>
    //    );
    //});
    const lideres=["Fulanito","Pereneno"]
    return(
        <div className="container">
            <div className="row">
                
                <div className="col-12">
                <hr />
                    <h3>Servicios Básicos</h3>
                    
                </div>                
            </div>
           
           
            <div className="row row-content">
            <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-success text-white">Compromiso Inicial</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Evaluación</dt>
                                <dd className="col-6"> de los Procesos Actuales</dd>
                                <dt className="col-6">Estrategias Contables </dt>
                                <dd className="col-6">Definición de los Criterios de Ingresos.</dd>
                                <dt className="col-6">Centros de Costo</dt>
                                <dd className="col-6">Definición de los Centros de Costo para el Control Gerencial</dd>
                                <dt className="col-6">Auxiliares Contables</dt>
                                <dd className="col-6">Definición de los criterios para los auxiliares de proveedores, clientes, bancos etc.</dd>
                                <dt className="col-6">Implantacion</dt>
                                <dd className="col-6">En base a las defiiciones anteriores se establece un cronograma de implantación</dd>
                                <dt className="col-6">Gerencia del Proyecto</dt>
                                <dd className="col-6">Se asigna un responsable que coordinadara la formación de los departamentos del cliente</dd>
                                <dt className="col-6">Costos</dt>
                                <dd className="col-6">Esto tendra un costo de <b>$5.000</b></dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-info text-white">Módulos del Sistema</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">I Administrativo</dt>
                                <dd className="col-6">Contabilidad, Bancos, Cuenta por Cobrar Libros de Compra y Venta, Comprobantes de retención, Informes Financieros, Cuentas Por Pagar, Ordenes de Compra, Anticipos y Facturas, Orden de Pago, Emisión Cheques y Transferencias.</dd>
                                <dt className="col-6">II Condominio</dt>
                                <dd className="col-6">Modulo adicional que se ajusta a las necesidades del cliente.</dd>
                                <dt className="col-6">III Alquileres</dt>
                                <dd className="col-6">Modulo adicional que se ajusta a las necesidades del cliente.</dd>
                                <dt className="col-6">IV MiTechito</dt>
                                <dd className="col-6">Sistema de Ventas y Cobranzas en grandes proyectos de interes social</dd>
                                <dt className="col-6">V Módulo Control Obras y Materiales</dt>
                                <dd className="col-6">Requisiciones, Presupuestos e Informes Gerenciales de Materiales, Avance Fisico y Financiero, Contros del Transito de Materiales.</dd>
                                <dt className="col-6">VI Control Financiero de Obras Nirvana</dt>
                                <dd className="col-6">Herramiento de Gestion de Indicadores de Proyectos Inmobiliarios.</dd>
                                
                                
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                </div>
                <div className="col-12">
               
                    <h3>Licencias de Uso</h3>
                    
                </div>    
                <div className="row row-content">
            <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-warning text-white">Costo Mensual</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-12">Tarifas</dt>
                                <dd className="col-12">Las tarifas serán mensuales por el uso de los módulos y el espacio en disco en cualquier numero de compañías asociadas</dd>
                                <dt className="col-6">I Modulo Administrativo</dt>
                                <dd className="col-6">150$/mes hasta 10 usuarios. 4 Uusarios adicionales 10$/mes.</dd>
                                <dt className="col-6">Otros Modulos</dt>
                                <dd className="col-6">100$/mes modulo adicional.</dd>
                                <dt className="col-6">Espacio en Disco</dt>
                                <dd className="col-6">Hasta 2 GIGA cada GIGA adicional 50$.</dd>
                                <dt className="col-6">Empresas Relacionadas</dt>
                                <dd className="col-6">Otras oficinas operativas o administrativas con sociedad menor al 50% 25% de incremento.</dd>
                                
                                
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-danger text-white">Que Cubre Mensualidad</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                            <dt className="col-6">Servidor</dt>
                            <dd className="col-6">Un servidor hasta 500 GIGA de bases de datos.</dd>
                            <dt className="col-6">Compañías</dt>
                            <dd className="col-6">Ilimitadas.</dd>
                            <dt className="col-6">Usuarios</dt>
                            <dd className="col-6">Hasta 10 y expensiones.</dd>
                            <dt className="col-6">Soporte</dt>
                            <dd className="col-6">Antes 8 horas hábiles.</dd>

                            <dt className="col-6">Mejoras</dt>
                            <dd className="col-6">Solo de Validación de datos.</dd>
                            <dt className="col-6">Cambios Fiscales</dt>
                            <dd className="col-6">Son ajustados (no nuevos procesos).</dd>
                            <dt className="col-6">Orientaciones</dt>
                            <dd className="col-6">En costos y contabilidad de proyectos.</dd>
                            <dt className="col-6">Tecnoloía</dt>
                            <dd className="col-6">Consultoría en tecnología y dispositivos.</dd>
                            
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                </div>
                
                <div className="row">
                
                <div className="col-12">
               
                    <h3>Formacion</h3>
                    
                </div>                
            </div>

            <div className="row row-content">
            
            <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-secondary text-white">Formacion</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-12">Entrenamiento</dt>
                                <dd className="col-12">Realizado por una empresa asociada a nosotros.</dd>
                                <dd className="col-12">Se establecerá un entrenamiento básico por unidad que podrá ser reproducido en otras unidades dependiendo de la estrategia de implantación a ser definida.</dd>
                                <dt className="col-12">Costo</dt>
                                <dd className="col-12">El costo estará basada por un criterio por consumo. Es decir por horas de entrenamiento (con un mínimo de 4 horas por sesion y un maximo de 4 personas)</dd>
                                <dd className="col-12">En general se podría realizar un entrenamiento a 4 personas en unas 24 horas a 100$Mac/ día.</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            <div className="col-12 col-md-5">
            <Card>
                        <CardHeader className="bg-secondary text-white">Formacion</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-12">Adiestramiento</dt>
                                <dd className="col-12">En principio seran horas de consultoria que podrian ser dos sesiones de dos dias por semana de 4 horas cada session. Esto durante un mes</dd>
                                <dd className="col-12">Luego se podrian disminuir a una sesion por semana de 4 horas durante los siguientes 3 meses</dd>
                                <dd className="col-12">Luego se podria definir un criterio de acompañamiento mensual</dd>
                                <dt className="col-12">Costo</dt>
                                <dd className="col-12">El costo de esta session de 4 horas sera de 100$</dd>
                            </dl>
                        </CardBody>
                    </Card>
            </div>
            </div>
                
                <div className="row">
                
                <div className="col-12">
               
                    <h3>Actividades de Implantación</h3>
                    
                </div>                
            </div>

            
           
            <div className="row row-content">
            
            <div className="col-12 col-md-5">
            <Card>
                    <CardHeader className="bg-secondary text-white">Implantacion</CardHeader>
                    <CardBody>
                        <dl className="row p-1">
                        <dt className="col-12">Modulo Contabilidad</dt>
                        <dd className="col-12" style={{'text-align':'left'}}><b>Plan de Cuentas</b> Definición del Plan de Cuentas. Manejo y uso del Plan de Cuentas. Manejo y uso del Plan de Auxiliares. Relación entre las Cuentas y los tipos de Auxiliares (Tipo: PR, BA, IN, y PA)</dd>
                        <dd className="col-12" style={{'text-align':'left'}}><b>Tipos de Docmentos</b>. Tipos de Comprobantes Contables del sistema. Configuraciones Contables. Proyectos. Comprobantes de Diarios.</dd>
                        <dd className="col-12" style={{'text-align':'left'}}><b>Manejo y uso de los procesos Contables.</b> Posteos. Desposteos, Cierre de Mes. Cierre de Periodos.</dd>
                        <dd className="col-12" style={{'text-align':'left'}}><b>Registro de Saldos Iniciiales</b> Para empresas que tengan movimiento de años anteriores o según el plan de acción que requiera el cliente.</dd>
                        
                               
                            
                        </dl>
                    </CardBody>
                </Card>
                </div>
            <div className="col-12 col-md-5">
            <Card>
                        <CardHeader className="bg-secondary text-white">Implantación</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                               
                                <dt className="col-12">Modulo Ordenes de Compra</dt>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo y Uso Operativo.</b> Registro de Contratos,Ordenes de Compra, Pre-Facturas, Anticipos y Materiales</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo y uso de los procesos admnistrativos.</b> Solicitud de pagos de Anticipos y Facturas. Pagos a Proveedores.</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo de Reportes administrativos.</b> Status de Ordenes de Compra. Estados de Cuenta Proveedores. Control de los pedidos y Facturaciones.</dd>
                                
                               
                                
                                
                            </dl>
                        </CardBody>
                    </Card>
            </div>
            </div>
            <div className="row row-content">
            
            <div className="col-12 col-md-5">
            <Card>
                    <CardHeader className="bg-secondary text-white">Implantacion</CardHeader>
                    <CardBody>
                        <dl className="row p-1">
                        <dt className="col-12">Modulo Cuentas por Pagar</dt>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo y uso Operativo.</b> En la carga de Obligaciones con o sin Ordenes de Compra. (Crear, eliminar y moficiar una obligación)</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo y uso de las Obligaciones</b> con Ordenes de Pago</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo de la parte Fiscal.</b> Retenciones ISLR, IVA, Retenciones de IVA, uso del Libro Compras, Libro Ventas, ARCV.</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo de Reportes Administrativos.</b> Estados de Cuenta. Analisis de Vencimientos. Cuentas por Pagar por proveedor. Como realizar los análisis  de cuentas por proveedor.</dd>
                                
                        </dl>
                    </CardBody>
                </Card>
                </div>
            <div className="col-12 col-md-5">
            <Card>
                        <CardHeader className="bg-secondary text-white">Implantación</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                               
                                <dt className="col-12">Modulo de Ventas</dt>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Creación y uso de Macroproyectos.</b> Creación, Configuración y uso de Proyectos. Configuracion COntable de los Proyectos.</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Creación y manejo Operativo.</b> Plan de Ventas. Plan de Pagos. Formas de Pago. Cheques. Transferencias o en Efectivo. Emisión de Recibos de pagos. Contratos. Opción de Compras. Cheques devueltos. </dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Cuadres de cajas.</b> Reportes administrativos de ventas.</dd>
                                <dd className="col-12" style={{'text-align':'left'}}><b>Manejo de Reportes Administrativos.</b> Resumen de Ventas. Cuadre Diario. Análisis de Cuotas Vencidas, Análisis de Cuotas por Vencer </dd>
                                
                                
                               
                                
                                
                            </dl>
                        </CardBody>
                    </Card>
            </div>
            </div>  
            <div className="row">
                
                <div className="col-12">
               
                    <h3>Servicios Adicionales</h3>
                    
                </div>                
            </div>
                <div className="row row-content">
            
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-info text-white">Requerimientos Adicionales</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Ajustes Procesos</dt>
                                <dd className="col-6">100$ ajuste.</dd>
                                <dt className="col-6">Nuevo Criterio de Filtro</dt>
                                <dd className="col-6">100$ ajuste.</dd>
                                <dt className="col-6">Nuevo Elemento en interfase sin alterar tablas de sql</dt>
                                <dd className="col-6">150$ ajuste.</dd>
                                <dt className="col-6">Nuevo Elemento en interfase alterando tablas de sql</dt>
                                <dd className="col-6">250$ ajuste.</dd>
                                <dt className="col-6">Nuevo Elemento en interfase que gener proceso</dt>
                                <dd className="col-6">500$ ajuste.</dd>
                                <dt className="col-6">Nueva columna en reporte</dt>
                                <dd className="col-6">100$ ajuste.</dd>
                                
                                
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-info text-white">Nuevas Interfases</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Nueva Ventana</dt>
                                <dd className="col-6">menos de 5 elementos 1.000$, mas de 6 elementos 2.000$.</dd>
                                <dt className="col-6">Nuevo Reporteo</dt>
                                <dd className="col-6">500$ en HTML, que pase a PDF o EXCEL 750$.</dd>
                                <dt className="col-6">Procesos SQL</dt>
                                <dd className="col-6">500$-1.000$.</dd>
                                <dt className="col-6">Interfases Bancos</dt>
                                <dd className="col-6">1.000$.</dd>
                                <dt className="col-6">Node API json</dt>
                                <dd className="col-6">1.000$ GET <br/> 2.000$ POST.</dd>
                                <dt className="col-6">Migraciones</dt>
                                <dd className="col-6">5.000$.</dd>
                                
                                
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                </div>

                
        </div>
    );
}

export default Servicios; 