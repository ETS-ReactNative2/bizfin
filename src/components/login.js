import React, { Component } from "react";
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
    return(
        <div>
        <h2>Autenticacion al Portal BizFin</h2>
        
        <form ref='myForm' name="t" id="t" action="http://bizaccount.net/Biz2015/PreHome.asp" method="post" > 
           <input type="hidden" name="trama" value="3083,fuentes,72,1,server=206.72.117.220;driver={sql server};uid=fuentes2015log;pwd=fuentes2015pwd123$;database=fuentes2015;,FUENTES2015,http://Bizaccount.net/Biz2015/PreHome.asp," />
           <input type="Submit" />
       </form>

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
        
           <header className="App-header">
                    
          <h3 className="App-title">Quienes Somos</h3>
        </header>
        </div>
    );
  }
}

export default Login;