const StudentModel = require('../models/student.model');


//get students list
exports.getStudentList = (req, res) => {
  console.log("List of Students:")
  StudentModel.getAllStudents((err, students) => {
    console.log("Students")
    if (err)
      res.send(err);
    console.log('Students: ', students);
    res.send(students);
  });
}

//get student by id
exports.getStudentByID = (req, res) => {
  console.log('Get student by ID ');
  StudentModel.getStudentByID(req.params.id, (err, student) => {
    if (err)
      res.send(err);
    console.log('Student', student);
    res.send(student);
  })
}