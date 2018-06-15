import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import CoursesView from '../Course/CoursesView';
import CourseDetailView from '../Course/CourseDetailView';
import LecturersView from '../Lecturer/LecturersView';
import LecturerDetailView from '../Lecturer/LecturerDetailView';

export default () => ((
  <div>
    <Route exact path="/" component={CoursesView}/>
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
    <Route exact path="/lecturers" component={LecturersView} />
    <Route exact path="/lecturers/:id" component={LecturerDetailView} />
  </div>
))
