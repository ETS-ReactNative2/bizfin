//https://devexpress.github.io/devextreme-reactive/react/grid/docs/reference/table-column-resizing/
//https://devexpress.github.io/devextreme-reactive/react/grid/demos/featured/tree-data/
//https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783
//npm start
import React from "react";

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
import {balgen} from '../data/balance.json';

const balance=balgen.map(cuenta=>{
  cuenta.DAUXILIAR=0;
  if (cuenta.NIVEL==4){ cuenta.DAUXILIAR=((cuenta.CUENTA+'').substring(0,8)+'000')*1;  }
  return( cuenta )
 } )
 //console.log(balance)
const getChildRows = (row, rows) => {
  const childRows = rows.filter(r => r.DAUXILIAR === (row ? row.CUENTA : 0));  
  return childRows.length ? childRows : null;
};
//const ppaa=getChildRows(balance[4],balance)
//console.log("==================================")
//console.log(ppaa)
//
class TreeBal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'CUENTA', title: 'Cuenta' },
        { name: 'DAUXILIAR', title: 'DAUXI' },
        { name: 'DESCRIPCION', title: 'Descripcion' },
        { name: 'TIPO_AUXILIAR', title: 'TA' },
        { name: 'SALDO_MONT_ANTER', title: 'Saldo_Anter' },
        { name: 'DEBITO_MONT_PERI', title: 'Debito' },
        { name: 'CREDITO_MONT_PERI', title: 'Debito' },       
        { name: 'SALDO_MONT_ACTUAL', title: 'Saldo_Actual' },
        { name: 'NIVEL', title: 'N' },
        { name: 'NIVEL2', title: 'N2' },
      ],
      rows: balance,
      pageSizes: [5, 10, 20],
      defaultColumnWidths: [
        { columnName: 'CUENTA', width: 160 },
        { columnName: 'DAUXILIAR', width: 130 },
        { columnName: 'DESCRIPCION', width: 300 },
        { columnName: 'TIPO_AUXILIAR', width: 80 },
        { columnName: 'SALDO_MONT_ANTER', width: 180 },
        { columnName: 'DEBITO_MONT_PERI', width: 180 },
        { columnName: 'CREDITO_MONT_PERI', width: 180 },        
        { columnName: 'SALDO_MONT_ACTUAL', width: 180 },
        { columnName: 'NIVEL', width: 50 },
        { columnName: 'NIVEL2', width: 50 },
        
      ],
      
      tableColumnExtensions: [
        { columnName: 'CUENTA', align: 'left' },        
      
        { columnName: 'TIPO_AUXILIAR', align: 'left' },
        { columnName: 'SALDO_MONT_ANTER', align: 'right' },
        { columnName: 'DEBITO_MONT_PERI', align: 'right' },
        { columnName: 'CREDITO_MONT_PERI', align: 'right' },
        { columnName: 'SALDO_MONT_ACTUAL', align: 'right' },
        { columnName: 'NIVEL', align: 'center' },
        { columnName: 'NIVEL2', align: 'center'},
      ]
      
    };
  }

  
  render() {
    const {
      rows, columns, pageSizes, defaultColumnWidths,
       tableColumnExtensions, 
    } = this.state;
    //console.log("render ")
//console.log(rows)
    return (
      
          <Grid rows={rows} columns={columns} > 
          <TreeDataState />
          <PagingState defaultCurrentPage={0} defaultPageSize={pageSizes[1]} />
          <CustomTreeData getChildRows={getChildRows} />
          <Table columnExtensions={tableColumnExtensions} />
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow /> 
          <TableTreeColumn for="CUENTA" />          
        </Grid>
      
      );
    }
  }
export default TreeBal;