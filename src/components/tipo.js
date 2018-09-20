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
import {tipo} from '../data/tipo.json';


//const ppaa=getChildRows(balance[4],balance)
//console.log("==================================")
//console.log(ppaa)
//
class TipoAuxi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'concepto', title: 'Cuenta' },
        { name: 'nombreconcepto', title: 'DAUXI' },
       
      ],
      rows: tipo,
      defaultColumnWidths: [
        { columnName: 'concepto', width: 160 },
        { columnName: 'nombreconcepto', width: 130 },
        
      ],
      
      tableColumnExtensions: [
        { columnName: 'concepto', align: 'left' },        
      
        { columnName: 'nombreconcepto', align: 'left' },
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
export default TipoAuxi;