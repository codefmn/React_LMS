import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
const {Sider} = Layout;

export default class TopNav extends React.Component{
  render(){
    return (
      <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, "collapsed"); }}
      >
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span ><Link to="/courses" className="linkStyle">Courses</Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span><Link to="/students" className="linkStyle">Students</Link></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span><Link to="/lecturers" style={{color:"#fff"}}>Lecturers</Link></span>
          </Menu.Item>
          </Menu>
      </Sider>
    );
  }
}
