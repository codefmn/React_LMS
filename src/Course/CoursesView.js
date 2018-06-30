import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Row, Col, Button} from 'antd';
import {fetchCourses} from '../api/course';
import CourseCard from './CourseCard';
import imgReact from '../images/course-react.svg';

export default class CourseView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            courses: []
        }
    }

    componentDidMount(){
        fetchCourses()
            .then(response =>{
                this.setState({courses:response.data});
            })
            .catch(e =>{
                alert(e);
            })
    }

    render(){
        return(
            <Layout>
                <Layout.Content>
                    <Row>
                        {this.state.courses.map(course=>
                        <Col key={course.Id} sm={24} md={12} lg={8}>
                            <CourseCard 
                            key = {course.Id}
                            id = {course.Id}
                            title={course.Name}
                            desc={course.CourseCode}
                            img={imgReact}/>
                        </Col>)}
                    </Row>
                    <Link to="courses/edit/NEW">
                        <Button type="primary">Add Course</Button>
                    </Link>
                </Layout.Content>
            </Layout>      
        );
    }
}

