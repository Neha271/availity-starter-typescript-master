import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '@availity/yup';
// import App from './App';
import { StoreProvider } from './stores';
import Select from './Select';
import './index.scss';
import 'react-block-ui/style.css';
import Home  from "./Home"

render(
  <StoreProvider>
    <Router>
      <Switch>
        {/* <Route path="/">
          <App />
</Route> */}
<Route path="/" component ={Select} />
          <Route path="/" component ={Home} />
      </Switch>
    </Router>
  </StoreProvider>,
  document.querySelector('#root')
);
