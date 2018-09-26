import React, { Component } from "react";
import { Jumbotron }  from 'reactstrap';
 
//import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          flag:0,
          
          config:null };
      }
    onSearch = (e) => {
        alert('The value is: ' + this.login.value+'  '+this.pwd.value);
        /////////this.refs.myForm.submit();
        console.log("onSearch")
        e.preventDefault();
        const { value } = this.login;
        console.log(value)
        this.setState({flag:1});
        fetch('http://nodebiz.azurewebsites.net/autenticacion')
          .then(response => response.json())
          .then(result => this.onSetResult(result, value))
          .catch((error) => {
            console.error(error);
        });
        if (value === '') {
          return;
        }
        //https://www.robinwieruch.de/local-storage-react/
     //https://carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/
      }
      onSetResult = (result, key) => {
        alert(result)
        this.refs.myForm.submit();
        console.log(result)
        result.server="serverip"
        result.user="userrrrrr"
        result.password="password"
        result.ip="xxx.xxx.xxx.xxx"
        result.pwd="pppaaawwwwd"
        alert(JSON.stringify(result))
        //localStorage.setItem(key, JSON.stringify(result.hits));
        this.setState({ hits: result.hits });
        this.setState({ flag:0 });
       
      }
  render() {
 

        <form onSubmit={this.onSearch}>
        <label>
          Usuario:
          <input type="text" ref={login => this.login = login} />
          </label>
          <label>
          Password:
          <input type="text" ref={pwd => this.pwd = pwd} />
          </label>
          <button type="submit">Click</button>
        </form>
        
        <Jumbotron>
           <div  dark className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Instrucciones de Uso</h1>
                       <p>Una vez registrado podra...</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
        </div>
    );
  }
}

export default Login;