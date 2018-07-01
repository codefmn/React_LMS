import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Icon} from 'antd';

export default class LecturerCard extends React.Component{
    render(){
        return(
            <div style={{padding:"15px 35px"}}>
                <Card
                actions={[
                <Link to={`/lecturers/${this.props.id}`}><span><Icon type="profile"/> Details</span></Link>, 
                <Link to={`/lecturers/edit/${this.props.id}`}><span><Icon type="edit"/> Edit</span></Link>]}>
                    <Card.Meta
                    title={this.props.title}
                    description={this.props.desc}/>
                </Card>
            </div>
        );
    }
}