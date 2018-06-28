import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'antd/dist/antd.css'
import './styles';
import App from './App';

axios.defaults.baseURL = 'http://lmsdemomar.azurewebsites.net/api/';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);
