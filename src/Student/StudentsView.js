import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Layout} from 'antd';
import StudentCard from './StudentCard';
import {fetchStudents} from '../api/student';

export default class StudentsView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            students: []
        }
    }

    componentDidMount(){
        fetchStudents()
            .then(response =>{
                this.setState({students:response.data});
            })
            .catch(e =>{
                alert(e);
            })
    }

    render(){
        return(
            <Layout>
                <Layout.Content>
                    {this.state.students.map(student=>
                    <StudentCard
                    key = {student.Id}
                    id = {student.Id}
                    title = {student.Name} />)}
                    <Link to="students/edit/NEW">
                        <Button type="primary">Add student</Button>
                    </Link>
                </Layout.Content>
            </Layout>
        );
    }
}

