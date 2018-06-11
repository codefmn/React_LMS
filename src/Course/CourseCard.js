import React from 'react';
import {Card,Icon,Avatar} from 'antd';
const {Meta} = Card;


export default class CourseCard extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{paddingLeft:"10px",paddingBottom:"15px",width:"350px"}}>
                <Card
                cover={<img alt="course" src={this.props.img} style={{height:"270px"}}/>}
                actions={[<Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                    title={this.props.title}
                    description={this.props.desc}/>
                </Card>
            </div>
        );
    }
}

