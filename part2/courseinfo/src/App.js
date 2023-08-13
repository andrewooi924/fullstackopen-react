const App = () => {

  const Course = ({course}) => {


    const Header = ({header}) => <h1>{header}</h1>

    const Content = ({content}) => {


      const Part = ({name, exercises}) => {
        return (
          <div>
          <p>{name} {exercises}</p>
          </div>
        )
      }

      return (
        <div>
          {content.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} />)}
          <b> total of {content.reduce(function (total, part) {return total + part.exercises;}, 0)} exercises </b>
        </div>
      )
    }

    return (
      <div>
        <Header header={course.name} />
        <Content content={course.parts} />
      </div>
    )
  }

  const courses = [
      {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

export default App
