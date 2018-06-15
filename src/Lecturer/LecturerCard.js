import React from 'react';
import {Card, Icon} from 'antd';

export default class LecturerCard extends React.Component{
    render(){
        return(
            <div style={{padding:"10px"}}>
            <Card
            actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}>
                <Card.Meta
                title={this.props.title}
                description={this.props.desc}/>
            </Card>
            </div>
        );
    }
}