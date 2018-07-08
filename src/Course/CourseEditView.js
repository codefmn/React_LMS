import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Form, Input, Button, notification} from 'antd';
import {fetchCourseById, saveCourse, updateCourse, deleteCourseById} from '../api/course';

export default class CourseEditView extends React.Component{
    constructor(){
        super();
        this.state={
            course:{}
        }
    }

    componentWillMount(){
        if('NEW'===this.props.match.params.id){
            this.setState({course:{}});
        }else{
            fetchCourseById(this.props.match.params.id)
                .then(response =>{
                    console.log(response.data);
                    this.setState({course:response.data});
                })
                .catch(e =>{
                    alert(e);
                })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if('NEW'===this.props.match.params.id){
            saveCourse(this.state.course)
                .then(
                    notification.success({
                        message: 'Sucess',
                        description: 'Course Added.',
                        duration: 0,
                        placement: 'topLeft',
                    })
                )
                .catch(e=>{
                    alert(e);
                })
        }else{
            updateCourse(this.props.match.params.id,this.state.course)
                .then(
                    notification.success({
                        message: 'Sucess',
                        description: 'Course Updated.',
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
        const course = {...this.state.course};
        course[name] = value;
        this.setState({ course });
        console.log(course);
    }

    handleDelete(){
        deleteCourseById(this.props.match.params.id)
            .then(
                notification.success({
                    message: 'Sucess',
                    description: 'Course Deleted.',
                    duration: 0,
                    placement: 'topLeft',
                })
            )
            .catch(e =>{
                alert(e);
            })
    }
    
    render(){
        const {course} = this.state;
        return(
            <Layout>
                <Layout.Content>
                    <Form style={{padding:"15px 35px"}}  onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item>
                            <Input placeholder="CourseCode" value={course.CourseCode} name='CourseCode'
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Name" value={course.Name} name='Name'
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Introduction" value={course.Introduction} name='Introduction'
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> Submit </Button>&nbsp;
                            <Button type="danger" onClick={this.handleDelete.bind(this)}> Delete </Button>&nbsp;
                            <Link to="/courses"><Button type="default"> Return </Button></Link>
                        </Form.Item>
                    </Form>
                </Layout.Content>
            </Layout>
        );
    }
}