import './styles.css'
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Logo from "../../assets/user.png"

class Login extends Component {   
    state = {
        email: "",
        password: "",
        error: ""
      };
    
    chamaApp = () => {
        this.setState({
            redirect: true
        })
    }

    //hardcoded
    verification = () => {
        if ((this.state.email === 'thais.dordan@hotmail.com') && (this.state.password === '1234')) {
            this.chamaApp();

        } else {
            alert("Dados incorretos :(");
        }
    }
    
    handleSignUp = e => {
        e.preventDefault();
        this.verification()
    };

    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        } else { 
            return (
                <div className="recuo">
                    <div class="Container">
                        <div>
                            <div class="group">
                                <img class="img" src={Logo} alt="Airbnb logo" /><label class="label">Login do cliente</label>
                            </div>
                            <form onSubmit={this.handleSignUp}>
                                {this.state.error && <p>{this.state.error}</p>}
                                <label class="labelInput"> E-mail:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="frmEmailA"
                                    placeholder="Ex: maria@gmail.com"
                                    required autocomplete="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                                <label class="labelInput">Senha:</label>
                                <input
                                    type="password"
                                    placeholder=""
                                    required
                                    onChange={e => this.setState({ password: e.target.value })} />
                                <button type="submit">Entrar</button>
                                <hr />
                                <Link to="/signup">Ainda não é cadastrado? Cadastre-se.</Link>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
  
export default Login;
