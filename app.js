// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let students = [];

// GET /students: Retrieve a list of all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET /students/{id}: Retrieve details of a student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.ID === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

// POST /students: Add a new student
app.post('/students', (req, res) => {
    const student = {
        ID: students.length + 1,
        Name: req.body.Name,
        Grade: req.body.Grade,
        Email: req.body.Email
    };
    students.push(student);
    res.status(201).json(student);
});

// PUT /students/{id}: Update an existing student by ID
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.ID === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');

    student.Name = req.body.Name;
    student.Grade = req.body.Grade;
    student.Email = req.body.Email;
    res.json(student);
});

// DELETE /students/{id}: Delete a student by ID
app.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.ID === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).send('Student not found');

    const deletedStudent = students.splice(studentIndex, 1);
    res.json(deletedStudent);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
