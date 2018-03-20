var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var studentController = require('./controllers/student.js');

mongoose.connect('mongodb://WilsonWang:w4i5l6s0o8n00@ds151558.mlab.com:51558/login');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var router = express.Router();

router.get('/', function(req, res) {        //this part can be omitted
    res.json({message: 'Hello World!'})
});

router.route('/students')
    .post(studentController.postStudents)
    .get(studentController.getStudents);

router.route('/students/:student_id')
    .get(studentController.getStudent)
    .put(studentController.putStudent)
    .delete(studentController.deleteStudent);

app.use('/api', router);

app.listen(3000);