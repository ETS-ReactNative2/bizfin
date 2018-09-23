import React from "react";
import { render } from "react-dom";
import {
  DataTypeProvider,
  TreeDataState,
  SelectionState,
  PagingState,
  CustomTreeData
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
  PagingPanel,
  TableColumnResizing,
  Toolbar,
  TableColumnVisibility,
  ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap3";
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
//import "@devexpress/dx-react-grid-bootstrap3/dist/dx-react-grid-bootstrap3.css";
import {cuentas} from '../data/cuentas.json';


//const ppaa=getChildRows(balance[4],balance)
//console.log("==================================")
//console.log(ppaa)
//
class Cuentas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'cuenta', title: 'Cuenta' },
        { name: 'descrip', title: 'Descripcion' },
        { name: 'auxiliar', title: 'Auxiliar' },
        { name: 'nivel', title: 'Nivel' },
       
      ],
      rows: cuentas,
      defaultColumnWidths: [
        { columnName: 'cuenta', width: 140 },
        { columnName: 'descrip', width: 460 },
        { columnName: 'auxiliar', width: 90 },
        { columnName: 'nivel', width: 40 },
        
      ],
      
      tableColumnExtensions: [
        { columnName: 'cuenta', align: 'left' },        
      
        { columnName: 'descrip', align: 'left' },
        { columnName: 'auxiliar', align: 'left' },        
      
        { columnName: 'nivel', align: 'left' },
       ]
      
    };
  }

  
  render() {
    const {
      rows, columns,  defaultColumnWidths,
       tableColumnExtensions, 
    } = this.state;
    //console.log("render ")
//console.log(rows)
    return (
      
          <Grid rows={rows} columns={columns} > 
          <Table columnExtensions={tableColumnExtensions} />
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow /> 
        </Grid>
      
      );
    }
  }
export default Cuentas;