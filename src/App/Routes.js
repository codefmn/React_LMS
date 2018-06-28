import React from 'react';
import {Route} from 'react-router-dom';
import CoursesView from '../Course/CoursesView';
import CourseDetailView from '../Course/CourseDetailView';
import LecturersView from '../Lecturer/LecturersView';
import LecturerDetailView from '../Lecturer/LecturerDetailView';
import LecturerEditView from '../Lecturer/LecturerEditView';

export default () => ((
  <div>
    <Route exact path="/" component={CoursesView}/>
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
    <Route exact path="/lecturers" component={LecturersView} />
    <Route exact path="/lecturers/:id" component={LecturerDetailView} />
    <Route exact path="/lecturers/edit/:id" component={LecturerEditView} />
  </div>
))
