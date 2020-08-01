import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import CadastroVideo from './pages/cadastro/Video/index'
import CadastroCategoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroVideo}/>
      <Route path='/cadastro/categoria' component={CadastroCategoria}/>
      <Route component={Home}/>

    </Switch>
  </BrowserRouter>,



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);