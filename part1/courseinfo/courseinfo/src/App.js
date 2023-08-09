const Header = (header) => {
  console.log(header)
  return (
    <div>
      <h1>{header.course}</h1>
    </div>
  )
}

const Part = (part) => {
  console.log(part)
  return (
      <div>
      <p>
        {part.part} {part.exercises}
      </p>
    </div>
  )
}

const Content = (content) => {
  console.log(content)
  return (
    <div>
      <Part part={content.parts[0].name} exercises={content.parts[0].exercises}/>
      <Part part={content.parts[1].name} exercises={content.parts[1].exercises}/>
      <Part part={content.parts[2].name} exercises={content.parts[2].exercises}/>
    </div>
  )
}

const Total = (total) => {
  console.log(total)
  return (
    <div>
      <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App;