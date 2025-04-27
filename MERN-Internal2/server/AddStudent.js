import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [student, setStudent] = useState({ name: '', department: '', roll_no: '', marks: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/students', student)
      .then(() => navigate('/'));
  }

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
        <input type="text" name="department" placeholder="Department" onChange={handleChange} /><br />
        <input type="number" name="roll_no" placeholder="Roll Number" onChange={handleChange} /><br />
        <input type="number" name="marks" placeholder="Marks" onChange={handleChange} /><br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
