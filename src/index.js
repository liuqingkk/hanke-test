import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import PictureSelect from './List';


ReactDOM.render(<Router>
  <Switch>
    <Route path='/' component={PictureSelect} />
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
