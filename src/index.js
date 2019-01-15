import React from "react";
import ReactDOM from "react-dom";
import Dashboard from './components/Dashboard';

const domContainer = document.getElementById('root');
domContainer ? ReactDOM.render(<Dashboard/>, domContainer) : false;

module.hot.accept();