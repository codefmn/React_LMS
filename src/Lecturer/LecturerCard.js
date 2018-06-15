import React from 'react';
import {Card, Icon, Avatar} from 'antd';

export default class LecturerCard extends React.Component{
    render(){
        return(
            <div style={{padding:"10px"}}>
            <Card
            actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}>
                <Card.Meta
                avatar={<Avatar src={this.props.avatar} />}
                title={this.props.title}
                description={this.props.desc}/>
            </Card>
            </div>
        );
    }
}