import React from 'react';
import {Row, Col} from 'antd';
import imgReact from '../images/course-react.svg';
import imgAngular from '../images/course-angular.svg';
import imgVue from '../images/course-vue.png';
import imgCsharp from '../images/course-csharp.jpg';
import imgNodejs from '../images/course-nodejs.png';
import imgPython from '../images/course-python.png';
import CourseCard from './CourseCard';

export default class CourseView extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col sm={24} md={12} lg={8}>
                        <CourseCard 
                        title={"React"}
                        desc={"React Course Details"}
                        img={imgReact}/>
                    </Col>
                    <Col sm={24} md={12} lg={8}>
                        <CourseCard
                        title={"Angular"}
                        desc={"Angular Course Details"}
                        img={imgAngular}/>
                    </Col>
                    <Col sm={24} md={12} lg={8}>
                        <CourseCard
                        title={"Vue"}
                        desc={"Vue Course Details"}
                        img={imgVue}/>
                    </Col>
                    <Col sm={24} md={12} lg={8}>
                        <CourseCard
                        title={"C#"}
                        desc={"C# Course Details"}
                        img={imgCsharp}/>
                    </Col>
                    <Col sm={24} md={12} lg={8}>
                        <CourseCard
                        title={"Node.js"}
                        desc={"Node.js Course Details"}
                        img={imgNodejs}/>
                    </Col>
                    <Col sm={24} md={12} lg={8}>
                        <CourseCard
                        title={"Python"}
                        desc={"Python Course Details"}
                        img={imgPython}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

