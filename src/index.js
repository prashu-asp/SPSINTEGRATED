import React from 'react';
import ReactDOM from 'react-dom';

//import Hello from './Hello';
import App from './App';
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render(

  ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter> 
  ,
  document.getElementById('root'))
  
);

