import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Card, Avatar, Button} from 'antd';
import {fetchLecturerById} from '../api/lecturer';

export default class LecturerDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            lecturer: {}
        }
    }

    componentDidMount(){
        fetchLecturerById(this.props.match.params.id)
            .then(response =>{
                this.setState({lecturer:response.data});
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
                            avatar = {<Avatar size="large">{this.state.lecturer.Id}</Avatar>}
                            title = {this.state.lecturer.Name} />
                        </Card>
                        <Link to="/lecturers"><Button type="primary">Return</Button></Link>
                    </div>
                </Layout.Content>
            </Layout>
        );
    }
}