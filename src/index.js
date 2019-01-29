import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Routes from './Routes';


ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));
