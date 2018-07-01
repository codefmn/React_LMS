import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Layout} from 'antd';
import LecturerCard from './LecturerCard';
import {fetchLecturers} from '../api/lecturer';

export default class LecturersView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            lecturers: []
        }
    }

    componentDidMount(){
        fetchLecturers()
            .then(response =>{
                this.setState({lecturers:response.data});
            })
            .catch(e =>{
                alert(e);
            })
    }

    render(){
        return(
            <Layout>
                <Layout.Content>
                    {this.state.lecturers.map(lecturer=>
                    <LecturerCard
                    key = {lecturer.Id}
                    id = {lecturer.Id}
                    title = {lecturer.Name} />)}
                    <Link to="lecturers/edit/NEW">
                        <Button type="primary">Add Lecturer</Button>
                    </Link>
                </Layout.Content>
            </Layout>
        );
    }
}

