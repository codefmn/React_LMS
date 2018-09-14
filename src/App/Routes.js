import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './Welcome';
import CoursesView from '../Course/CoursesView';
import CourseDetailView from '../Course/CourseDetailView';
import CourseEditView from '../Course/CourseEditView';
import StudentsView from '../Student/StudentsView';
import StudentDetailView from '../Student/StudentDetailView';
import StudentEditView from '../Student/StudentEditView';
import LecturersView from '../Lecturer/LecturersView';
import LecturerDetailView from '../Lecturer/LecturerDetailView';
import LecturerEditView from '../Lecturer/LecturerEditView';

export default () => ((
  <div>
    <Route exact path="/" component={Welcome}/>
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
    <Route exact path="/courses/edit/:id" component={CourseEditView} />
    <Route exact path="/students" component={StudentsView} />
    <Route exact path="/students/:id" component={StudentDetailView} />
    <Route exact path="/students/edit/:id" component={StudentEditView} />
    <Route exact path="/lecturers" component={LecturersView} />
    <Route exact path="/lecturers/:id" component={LecturerDetailView} />
    <Route exact path="/lecturers/edit/:id" component={LecturerEditView} />
  </div>
))
