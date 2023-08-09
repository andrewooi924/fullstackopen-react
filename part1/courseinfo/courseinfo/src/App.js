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
      <Part part={content.part1} exercises={content.exercises1}/>
      <Part part={content.part2} exercises={content.exercises2}/>
      <Part part={content.part3} exercises={content.exercises3}/>
    </div>
  )
}

const Total = (total) => {
  console.log(total)
  return (
    <div>
      <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3= 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App;
