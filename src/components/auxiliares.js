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
import 'bootstrap/dist/css/bootstrap-theme.css'
//import "@devexpress/dx-react-grid-bootstrap3/dist/dx-react-grid-bootstrap3.css";
import {auxiliares} from '../data/auxiliares.json';


//const ppaa=getChildRows(balance[4],balance)
//console.log("==================================")
//console.log(ppaa)
//
class Auxiliares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'tipo', title: 'TA' },
        { name: 'auxi', title: 'Auxi' },
        { name: 'descripcion', title: 'Descripcion' },
        { name: 'cia', title: 'Cia' },
       
      ],
      rows:auxiliares,
      defaultColumnWidths: [
        { columnName: 'tipo', width: 50 },
        { columnName: 'auxi', width: 100 },
        { columnName: 'descripcion', width: 300 },
        { columnName: 'cia', width: 100 },
        
      ],
      
      tableColumnExtensions: [
        { columnName: 'tipo', align: 'left' },        
      
        { columnName: 'auxi', align: 'left' },
        { columnName: 'descripcion', align: 'left' },        
      
        { columnName: 'cia', align: 'left' },
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
export default Auxiliares;