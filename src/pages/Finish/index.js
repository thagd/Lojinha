import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import * as CartActions from '../../store/modules/cart/actions';
import '../Cart/styles.css';
 
export default function Cart() {
 const cart = useSelector(state =>
   state.cart.map(book => ({
     ...book,
     subtotal: book.price * book.amount,
   }))
 );
 
 const total = useSelector(state =>
   state.cart.reduce((totalSum, product) => {
     return totalSum + product.price * product.amount;
   }, 0)
 );
 
 const dispatch = useDispatch();
 
 function increment(book) {
   dispatch(CartActions.updateAmount({
     id: book.id,
     amount: book.amount + 1,
   }));
 }
 
 return (
   <div className="recuo">
    <main className="container">
      <div className="bag-container">
        <table className="book-table">
          <thead>
            <tr>
              <th />
              <th>Item</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map(book => (
              <tr key={book.id}>
                <td>
                  <img src={book.image} alt={book.name} />
                </td>
                <td>
                  <strong>{book.name}</strong>
                  <span>R$ {book.price}</span>
                </td>
                <td>
                  <div>
                    <input type="number" readOnly value={book.amount} />
                    <button type="button" onClick={() => increment(book)}>
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$ {book.subtotal.toFixed(3).slice(0,-1)}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <footer>  
          <div className="total">
            <span>Total</span>
            <strong>R$ {total.toFixed(3).slice(0,-1)}</strong>
          </div>
        </footer>
      </div>
    </main>
   </div>
 );
}