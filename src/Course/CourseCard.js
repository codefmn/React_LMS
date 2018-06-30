import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Icon} from 'antd';


export default class CourseCard extends React.Component{
    render(){
        return(
            <div style={{padding:"20px 20px 20px 40px",width:"350px"}}>
                <Card
                cover={<img alt="course" src={this.props.img} style={{height:"270px"}}/>}
                actions={[
                    <Link to={`/courses/${this.props.id}`}><span><Icon type="profile"/> Details</span></Link>, 
                    <Link to={`/courses/edit/${this.props.id}`}><span><Icon type="edit"/> Edit</span></Link>]}>
                    <Card.Meta
                    title={this.props.title}
                    description={this.props.desc}/>
                </Card>
            </div>
        );
    }
}

