import React from 'react';
import {Layout} from 'antd';
import Routes from './App/Routes';
import TopNav from './App/TopNav';

const {Header, Content} = Layout;

export default function App() {
	return (
		<Layout>
			<TopNav />
			<Layout  style={{backgroundColor:"#00134d" }}>
				<Header style={{color:'#fff'}}>
					Learning Management System
				</Header>
				<Content>
					<Routes />
				</Content>
			</Layout>
		</Layout>
	)
}
