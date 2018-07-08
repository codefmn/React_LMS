import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Form, Input, Button, notification} from 'antd';
import {fetchStudentById, saveStudent, updateStudent, deleteStudentById} from '../api/student';

export default class StudentEditView extends React.Component{
    constructor(){
        super();
        this.state={
            student:{}
        }
    }

    componentWillMount(){
        if('NEW'===this.props.match.params.id){
            this.setState({student:{}});
        }else{
            fetchStudentById(this.props.match.params.id)
                .then(response =>{
                    console.log(response.data);
                    this.setState({student:response.data});
                })
                .catch(e =>{
                    alert(e);
                })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if('NEW'===this.props.match.params.id){
            saveStudent(this.state.student)
                .then(
                    notification.success({
                        message: 'Sucess',
                        description: 'Student Added.',
                        duration: 0,
                        placement: 'topLeft',
                    })
                )
                .catch(e=>{
                    alert(e);
                })
        }else{
            updateStudent(this.props.match.params.id,this.state.student)
                .then(
                    notification.success({
                        message: 'Sucess',
                        description: 'Student Updated.',
                        duration: 0,
                        placement: 'topLeft',
                    })
                )
                .catch(e=>{
                    alert(e);
                })
        }
    }

    handleInputChange(e){
        const {name, value} = e.target;
        const student = {...this.state.student};
        student[name] = value;
        this.setState({ student });
        console.log(student);
    }

    handleDelete(){
        deleteStudentById(this.props.match.params.id)
            .then(
                notification.success({
                    message: 'Sucess',
                    description: 'Student Deleted.',
                    duration: 0,
                    placement: 'topLeft',
                })
            )
            .catch(e =>{
                alert(e);
            })
    }

    render(){
        const {student} = this.state;
        return(
            <Layout>
                <Layout.Content>
                    <Form style={{padding:"15px 35px"}}  onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            <Input placeholder="Name" value={student.Name} name='Name'
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Submit </Button>&nbsp;
                            <Button type="danger" onClick={this.handleDelete.bind(this)}> Delete </Button>&nbsp;
                            <Link to="/students"><Button type="default"> Return </Button></Link>
                        </Form.Item>
                    </Form>
                </Layout.Content>
            </Layout>
        );
    }
}