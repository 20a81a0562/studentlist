const StudentShow = (props) => {
    const {Name,Rollno,Marks} = props;
    return <>
    <h2>Name of the student : {Name}</h2>
    <h3>Roll number : {Rollno} </h3>
    <h3>Marks : {Marks}</h3>
    </>
}

export default StudentShow;