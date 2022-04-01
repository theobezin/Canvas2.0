var dbConn = require('../../config/db.config');


var Student = function(student) {
    this.id_user = student.id_user;
    this.id_campus = student.id_campus;
    this.id_speciality = student.id_speciality;
    this.id_level = student.id_level;
    this.id_compta = student.id_compta;
    this.id_contrat_pro = student.id_contrat_pro;
    this.id_hiring = student.id_hiring;
    this.date_of_birth = student.date_of_birth;
    this.gender = student.gender;
    this.region = student.region;
    this.address = student.address;
    this.still_student = student.still_student;
    this.number_absence = student.number_absence;
}


//get all students
Student.getAllStudents = (data)=> {
    dbConn.query("SELECT * FROM student", (err, res)=>{
        if(err){
            console.log('Error fetching students :', err);
            data(null,err); 
        }else{
            console.log('Students fetched successfully');
            data(null,res);
        }

    })
}

//get student by ID
Student.getStudentByID = (id, data)=>{
    dbConn.query("SELECT * FROM student WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching student with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}



module.exports = Student;