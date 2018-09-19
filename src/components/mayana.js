import React from "react";
import { render } from "react-dom";
import {  DataTypeProvider,TreeDataState, SelectionState,PagingState,CustomTreeData } from "@devexpress/dx-react-grid";
import {Grid,Table,TableHeaderRow,TableTreeColumn,PagingPanel,TableColumnResizing,Toolbar, TableColumnVisibility,ColumnChooser
} from "@devexpress/dx-react-grid-bootstrap3";


//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
//import "@devexpress/dx-react-grid-bootstrap3/dist/dx-react-grid-bootstrap3.css";
import {mayana} from '../data/mayana.json';
console.log(mayana.length)

//const ppaa=getChildRows(balance[4],balance)
//console.log("==================================")
//console.log(ppaa)
//
const CurrencyFormatter = ({ value }) => (
    
    <b style={{ color: 'white',backgroundColor: 'black' }}>${value}</b>
  );
  const CurrencyTypeProvider2 = props => (
    <DataTypeProvider
    
      formatterComponent={CurrencyFormatter}
      {...props}
    />
  );
class MayAna extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'cuenta', title: 'Cuenta' },
        { name: 'ta', title: 'TA' },
        { name: 'auxiliar', title: 'Auxiliar' },
        { name: 'nivel', title: 'Nivel' },
        
        { name: 'tipo_documento', title: 'TD' },
        
        
        { name: 'fcha_comprobante', title: 'Fecha' },
        { name: 'periodo', title: 'Peri' },
       
        { name: 'num_comprob', title: '#Comprob' },
        { name: 'ant', title: 'Ant' },
        { name: 'debito_mont', title: 'Debito' },
        { name: 'credito_mont', title: 'Credito' },
        { name: 'act', title: 'Actual' },
      
      ],
      rows: mayana,
      currencyColumns: ['cuenta','ta','auxiliar'],
      pageSizes: [5, 10, 20],
      defaultColumnWidths: [
        { columnName: 'cuenta', width: 160 },
        { columnName: 'ta', width: 50 },
        { columnName: 'tipo_documento', width: 80 },
        { columnName: 'auxiliar', width: 100 },
        { columnName: 'nivel', width: 80 },
        { columnName: 'fcha_comprobante', width: 160 },
        { columnName: 'periodo', width: 100 },
        { columnName: 'num_comprob', width: 160 },
        { columnName: 'ant', width: 160 },
        { columnName: 'debito_mont', width: 160 },
        { columnName: 'credito_mont', width: 160 },
        { columnName: 'act', width: 160 },
      ],
      
      tableColumnExtensions: [
        { columnName: 'cuenta', align: 'left' },        
        { columnName: 'ta', align: 'left' },
        { columnName: 'tipo_documento', align: 'left' },  
        { columnName: 'auxiliar', align: 'left' },
        { columnName: 'fcha_comprobante', align: 'left' },
        { columnName: 'periodo', align: 'left' },
        { columnName: 'num_comprob', align: 'left' },  
        { columnName: 'ant', align: 'right' },  
        { columnName: 'debito_mont', align: 'right' },  
        { columnName: 'credito_mont', align: 'right' },  
        { columnName: 'act', align: 'right' },  
        
    ]
      
    };
  }

  
  render() {
    const {
      rows, columns, pageSizes, defaultColumnWidths,
       tableColumnExtensions, currencyColumns
    } = this.state;
    //console.log("render ")
//console.log(rows)
    return (
      
          <Grid rows={rows} columns={columns} >
          <CurrencyTypeProvider2
            for={currencyColumns}
          /> 
          <PagingState defaultCurrentPage={0} defaultPageSize={pageSizes[1]} />
          <Table columnExtensions={tableColumnExtensions} />
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
          <TableHeaderRow /> 
        </Grid>
      
      );
    }
  }
export default MayAna;