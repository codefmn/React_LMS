import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Form, Input, Button} from 'antd';
import {fetchLecturerById, saveLecturer, updateLecturer} from '../api/lecturer';

export default class LecturerEditView extends React.Component{
    constructor(){
        super();
        this.state={
            lecturer:{LecturerDetail:{}}
        }
    }

    componentWillMount(){
        if('NEW'===this.props.match.params.id){
            this.setState({lecturer:{}});
        }else{
            fetchLecturerById(this.props.match.params.id)
                .then(response =>{
                    console.log(response.data);

                    this.setState({lecturer:response.data});
                })
                .catch(e =>{
                    alert(e);
                })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if('NEW'===this.props.match.params.id){
            saveLecturer(this.state.lecturer);
        }else{
            updateLecturer(this.props.match.params.id,this.state.lecturer);
        }
    }

    handleInputChange(e){
        const {name, value} = e.target;
        const lecturer = {...this.state.lecturer};
        lecturer[name] = value;
        this.setState({ lecturer });
        console.log(lecturer);
    }

    render(){
        const {lecturer} = this.state;
        return(
            <Layout>
                <Layout.Content>
                    <Form style={{padding:"15px 35px"}}  onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            <Input placeholder="Name" value={lecturer.Name} name='Name'
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Submit </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/lecturers"><Button type="primary">Cancel</Button></Link>
                        </Form.Item>
                    </Form>
                </Layout.Content>
            </Layout>
        );
    }
}