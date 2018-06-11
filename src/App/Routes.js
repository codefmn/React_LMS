import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import CoursesView from '../Course/CoursesView';
import CourseDetailView from '../Course/CoursesView';


export default () => ((
  <div>
    <Route exact path="/" component={CoursesView}/>
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
  </div>
))
