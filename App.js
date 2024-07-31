import React from 'react';
import StudentListComponent from './StudentListCompo.js';

const studentList = [
  { id: 120, firstName: "Naresh", lastName: "Kumar", course: "MECHANICAL" },
  { id: 121, firstName: "Muthu", lastName: "Ganesh", course: "CIVIL" },
  { id: 122, firstName: "Ritesh", lastName: "Arya", course: "MECHANICAL" }
];

function App() {
  return (
    <div className="App">
      <h3><center>STUDENT MANAGEMENT</center></h3>
      <StudentListComponent studentList={studentList} />
    </div>
  );
}

export default App;
