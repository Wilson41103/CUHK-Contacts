var mongoose = require ('mongoose');

var StudentSchema = new mongoose.Schema({
    name: String,
    nickname: String,
    sex: String,
    faculty: String,
    college: String,
    hostel: String,
    phone: String,
    highschool: String,
    hometown: String,
    note: String
});

module.exports = mongoose.model('Student', StudentSchema);