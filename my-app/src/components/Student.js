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

// Student.defaultProps = {
//     name: 'Sagar Barvaliya',
//     major:'Information Science',
//     interest:'Looking forward to get into IOS programming',
// }

export default Student
