import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Card, Avatar, Button} from 'antd';
import {fetchCourseById} from '../api/course';

export default class CourseDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            course: {}
        }
    }

    componentWillMount(){
        fetchCourseById(this.props.match.params.id)
            .then(response =>{
                this.setState({course:response.data});
            })
            .catch(e =>{
                alert(e);
            })
    }
    
    render(){
        return(
            <Layout>
                <Layout.Content>
                    <div style={{padding:"15px 35px"}}>
                        <Card>
                            <Card.Meta
                            avatar = {<Avatar size="large">{this.state.course.CourseCode}</Avatar>}
                            title={this.state.course.Name}
                            description={this.state.course.Introduction} />
                        </Card>
                        <Link to="/courses"><Button type="primary">Return</Button></Link>
                    </div>
                </Layout.Content>
            </Layout>
        );
    }
}