const Course = ({course}) => {


    const Header = ({header}) => <h3>{header}</h3>

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


  export default Course