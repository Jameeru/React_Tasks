import React from 'react';
import StudentListComponent from './StudentListCompo.js';

const studentList = [
  {
    id: 120,
    fistName: "Naresh",
    lastName: 'Kumar',
    course: 'MECHANICAL',
  },
  {
    id: 121,
    fistName: "Muthu",
    lastName: 'Ganesh',
    course: 'CIVIL',
  },
  {
    id: 122,
    fistName: "Ritesh",
    lastName: 'Arya',
    course: 'MECHANICAL',
  }
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
