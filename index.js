import React from 'react';
import ReactDOM from 'react-dom/client';
import {Students} from './Student';
import StudentShow from './StudentShow';

const StudentList = () => {
    
    return (<>
    <section>
    {Students.map((student) => {
        return <StudentShow {...student} key={student.id}/>
    })}
      </section>  
    </>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentList/>);
export default StudentList;