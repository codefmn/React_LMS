import React, { Component } from 'react';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import {Row, Col, Layout} from 'antd';
import Routes from './App/Routes';
import TopNav from './App/TopNav';

const {Content} = Layout;

export default function App() {
	return (
		<Layout>
			<TopNav />
			<Layout  style={{backgroundColor:"#00134d" }}>
				<Content>
					<Routes />
				</Content>
			</Layout>
		</Layout>
	)
}
