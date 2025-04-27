// EditStudent.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', department: '', roll_no: '', marks: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/students`)
      .then((res) => {
        const studentData = res.data.find((stu) => stu._id === id);
        if (studentData) setStudent(studentData);
      });
  }, [id]);

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:5000/students/${id}`, student)
      .then(() => navigate('/'));
  }

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" /><br />
        <input type="text" name="department" value={student.department} onChange={handleChange} placeholder="Department" /><br />
        <input type="number" name="roll_no" value={student.roll_no} onChange={handleChange} placeholder="Roll Number" /><br />
        <input type="number" name="marks" value={student.marks} onChange={handleChange} placeholder="Marks" /><br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
