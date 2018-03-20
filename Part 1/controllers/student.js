var Student = require('../models/student');

exports.postStudents = function(req, res) {
    var student = new Student();

    student.name = req.body.name;
    student.nickname = req.body.nickname;
    student.sex = req.body.sex;
    student.faculty = req.body.faculty;
    student.college = req.body.college;
    student.hostel = req.body.hostel;
    student.phone = req.body.phone;
    student.highschool = req.body.highschool;
    student.hometown = req.body.hometown;
    student.note = req.body.note;

    student.save(function(err){
        if (err)
            return res.send(err);

        res.json({ message: 'You have been added to the contact!', data: student});
    });
};

exports.getStudents = function(req, res){
    Student.find(function(err, students){
        if(err)
            return res.send(err);

        res.json(students);
    });
};

exports.getStudent = function(req, res){
    Student.findById(req.params.student_id, function(err, student){
        if(err)
            return res.send(err);

        res.json(student);
    });
};

exports.putStudent = function(req, res){
    Student.findById(req.params.student_id, function(err, student){
        if(err)
            return res.send(err);

        if (req.body.name) student.name = req.body.name;
        if (req.body.nickname) student.nickname = req.body.nickname;
        if (req.body.sex) student.sex = req.body.sex;
        if (req.body.faculty) student.faculty = req.body.faculty;
        if (req.body.college) student.college = req.body.college;
        if (req.body.hostel) student.hostel = req.body.hostel;
        if (req.body.phone) student.phone = req.body.phone;
        if (req.body.highschool) student.highschool = req.body.highschool;
        if (req.body.hometown) student.hometown = req.body.hometown;
        if (req.body.note) student.note = req.body.note;

        student.save(function(err){
            if(err)
                return res.send(err);

            res.json(student);
        });
    });
};

exports.deleteStudent = function(req, res){
    Student.findByIdAndRemove(req.params.student_id, function(err, student){
        if(err)
            return res.send(err);

        res.json({message: 'The student has been removed from the contact!'});
    });
};