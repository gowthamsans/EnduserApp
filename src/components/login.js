import React, { Component } from 'react';
import '../css/login.css'

export class Login extends Component {
    static displayName = Login.name;

    handleOnClick = () => {
        this.props.history.push("/dashboard");
    }

render(){

    return(
      <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
            
            <div className="fadeIn first">
                <img src="" id="icon" />
            </div>
        
            
            <form>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.handleOnClick} />
            </form>
        
        
            <div id="formFooter">
                <a className="underlineHover" href="">Forgot Password?</a>
            </div>
        
                </div>
            </div>
        </div>
        );
    }
}