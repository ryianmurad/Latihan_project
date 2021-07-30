import react,{Component,Fragment} from 'react';
import './App.css';


class App extends Component{
  render(){
    return(
      <Fragment>
        <div className="content-wrapper">
            <div className="login-action">
              <div className="login-user">
                <p className="">Username</p>
                <input className="bar"/>
              </div>
              <div className="login-pass">
                <p className="">Passwaord</p>
                <input className="bar"/>
              </div> 
              <button>Login</button>           
            </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
