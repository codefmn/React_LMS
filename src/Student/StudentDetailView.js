import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Card, Avatar, Button} from 'antd';
import {fetchStudentById} from '../api/student';

export default class StudentDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            student: {}
        }
    }

    componentWillMount(){
        fetchStudentById(this.props.match.params.id)
            .then(response =>{
                this.setState({student:response.data});
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
                            avatar = {<Avatar size="large">{this.state.student.Id}</Avatar>}
                            title = {this.state.student.Name} />
                        </Card>
                        <Link to="/students"><Button type="primary">Return</Button></Link>
                    </div>
                </Layout.Content>
            </Layout>
        );
    }
}