const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => {
        return <Part key={index} name={part.name} exercises={part.exercises} />
      })}
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  let totalExercises = 0;
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

  for (const part of course.parts) {
    totalExercises += part.exercises;
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts} />
      <Total exercises={totalExercises} />
    </div>
  )
}

export default App