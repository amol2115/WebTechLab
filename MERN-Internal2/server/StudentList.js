// StudentList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  function fetchStudents() {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data));
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        fetchStudents(); // refresh the list after deleting
      });
  }

  return (
    <div>
      <h1>Student List</h1>
      <Link to="/add">Add New Student</Link>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.department} - {student.roll_no} - {student.marks}
            {' '}
            <Link to={`/edit/${student._id}`}>Edit</Link>
            {' '}
            <button onClick={() => handleDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
