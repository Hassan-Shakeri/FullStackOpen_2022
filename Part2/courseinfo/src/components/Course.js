import React from 'react-dom';
import Header from './Header';
import Content from './Content';
import Total from './Total';


const Course = ({course}) => {
    return(
      <div>
      <Header title = {course.name}/>
      <Content data={course.parts}/>
      <Total data= {course.parts}/>
      </div>
    )
  }
  
export default Course;
  