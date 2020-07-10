import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button() {;
    return(
        <header>
            <Link to="/login">
                <button className="login">Entrar</button>
            </Link>

            <Link to="/signup">
                <button className="singin">Cadastrar</button>
            </Link>
        </header>
    );
}