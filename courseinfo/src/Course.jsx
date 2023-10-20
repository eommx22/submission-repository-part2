import React from "react"

import Header from "./Header.jsx"
import Content from "./Content.jsx"
import Total from "./Total.jsx" 

const Course = (props) => {
  
  return (
    <>
      <Header course={props.course.name }/>
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />  
    </>
  )
}

export default Course