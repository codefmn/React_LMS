import React from 'react';
import LecturerCard from './LecturerCard';
import imgLec1 from '../images/lecturer-a.jpg';
import imgLec2 from '../images/lecturer-b.jpg';

export default class LecturerView extends React.Component{
    render(){
        return(
            <div>
                <LecturerCard
                title="Lecturer 1"
                desc="desc 1"
                avatar={imgLec1} />
                <LecturerCard
                title="Lecturer 2"
                desc="desc 2"
                avatar={imgLec2} />
            </div>
        );
    }
}

