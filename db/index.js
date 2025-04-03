const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://osmansaifi30:VI5Xirc5TtXJTEl4@cluster0.tze6j.mongodb.net/Course_selling_App')
.then(() => console.log("connected"))


// Admin 
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String,
})

// User 
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }], 
})

// Course
const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number    
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}