import React from 'react';
 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
 
import Routes from './routes';
import Header from './components/Header';
import Menu from './components/Button'

import store from './store';
 
function App() {
 return (
   <Provider store={store}>
     <BrowserRouter>
       <Header />
       <Menu />
       <Routes />
     </BrowserRouter>
   </Provider>
 );
}
 
export default App;