import React from 'react';
import LecturerCard from './LecturerCard';

export default class LecturerView extends React.Component{
    render(){
        return(
            <div>
                <LecturerCard
                title="Lecturer 1"
                desc="desc 1" />
                <LecturerCard
                title="Lecturer 2"
                desc="desc 2" />
            </div>
        );
    }
}

