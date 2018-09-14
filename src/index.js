import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'antd/dist/antd.css'
import './styles';
import App from './App';

// axios.defaults.baseURL = 'https://lmsdemomar.azurewebsites.net/api/';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b9b8152ba52506b3d994bfe/lms/';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
);
