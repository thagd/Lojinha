import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
import { FiShoppingBag } from 'react-icons/fi';
import './styles.css';
 
export default function Header() {;
 const cartSize = useSelector(state => state.cart.length);
 return (
   <div className="fixed">
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-text">Lojinha</span>
      </Link>
  
      <Link to="/cart" className="header-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>{cartSize}</strong> itens
          </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
   </div>
 );
}