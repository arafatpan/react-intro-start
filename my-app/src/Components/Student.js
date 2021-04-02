const Student = ({student}) => {
    return (
        <>
          <div className="border m-2 p-3">
            <h2 className="bg-light">
                {student.name}
            </h2>
            <h5>{student.major}</h5>
            <p>{student.interest}</p>
          </div> 
        </>
    )
}

export default Student
