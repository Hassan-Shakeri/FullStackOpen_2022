const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part part={props.data[0]}/>
      <Part part={props.data[1]}/>
      <Part part={props.data[2]}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.data[0].exercises + props.data[1].exercises + props.data[2].exercises}</p>
    </div>
    )
}


const Part = (props) => {
  console.log(props)

  return(
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
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
  return(
  <div>
    <Header course = {course.name}/>
    <Content data={course.parts}/>
    <Total data= {course.parts}/>
  </div>)
}

export default App;
