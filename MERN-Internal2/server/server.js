// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Schema and Model
const StudentSchema = new mongoose.Schema({
  name: String,
  department: String,
  roll_no: Number,
  marks: Number
});

const Student = mongoose.model('Student', StudentSchema);

// CRUD Routes

// Create
app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

// Read
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Update
app.put('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// Delete
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
