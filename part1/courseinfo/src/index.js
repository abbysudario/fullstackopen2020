import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises} </p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises} </p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises} </p>
      
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises  }</p>
    </>
  )
}





const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }




// const App = () => 
//   {
//   const course = 'Half Stack application development'
//   const parts = [
//       {
//       name: 'Fundamentals of React',
//       exercises: 10
//       },
//       {
//       name: 'Using props to pass data',
//       exercises: 7
//       },
//       {
//       name: 'State of a component',
//       exercises: 14
//       }
//     ]
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14


  return (
    <>
      <Header course= {course} />
      <Content course= {course}   />
      <Total course= {course} />
    
      
     
     
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))