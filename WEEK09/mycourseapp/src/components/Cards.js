import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;

    let allCourse = [];

    // returns the list of all courses
    function getCourses() {
        Object.values(courses.data).forEach( array =>{
            array.forEach((courseAttribute)=>{
                allCourse.push(courseAttribute);
            })
        })
        return allCourse;
    }


  return (
    <div>
        {getCourses().map((course)=>{
            return(
                <Card key={course.id} course = {course}/>
            );
        })}
    </div>
  )
}

export default Cards;