import '../Login/styles.css';
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Logo from "../../assets/user.png"

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        date: "",
        cpf: "",
        error: ""
    };

    chamaApp = () => {
        this.setState({
            redirect: true
        })
    }

    handleSignUp = e => {
        e.preventDefault();
        this.chamaApp();
    };
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/login" />
        } else{
            return (
                <div className="recuo">
                    <container class="Container">
                    <div className="group-signup">
                        <div class="teste">
                        <img class="img" src={Logo} alt="Airbnb logo" /><label class="label">Cadastre-se</label></div>
                        <form onSubmit={this.handleSignUp}>
                            {this.state.error && <p>{this.state.error}</p>}
                            <label class="labelInput">Nome:</label>
                            <input
                                type="text"
                                name="name"
                                required autocomplete="name"
                                placeholder=""
                                onChange={e => this.setState({ username: e.target.value })} />
                            <label class="labelInput">E-mail:</label>
                            <input
                                type="email"
                                name="email"
                                required autocomplete="email"
                                placeholder="Ex: maria@gmail.com"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <label class="labelInput">Senha:</label>
                            <input
                                type="password"
                                placeholder=""
                                required
                                minLength="4"
                                onChange={e => this.setState({ password: e.target.value })} />
                            <label class="labelInput">Data de nascimento:</label>
                            <input
                                type="date"
                                placeholder="Ex:25/09/1997"
                                required
                                onChange={e => this.setState({ date: e.target.value })} />
                            <label class="labelInput">Cpf:</label>
                            <input
                                type="text" class="form-control cpf-mask"
                                placeholder="Ex: 000.000.000-00"
                                required
                                maxlength="10"
                                minLength="10"
                                onChange={e => this.setState({ cpf: e.target.value })} />
                            <button type="submit">Cadastrar</button>
                            <hr />
                            <Link to="/login">Já tem cadastro? Entrar.</Link>
                        </form>
                    </div>
                    </container>
                </div>
            )
        }
    }
}

export default Signup;



