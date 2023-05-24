import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentScema = new Schema({
    name: {
        type: String,
        require:true
    },
    mobile: {
        type: String,
        require: true,
        unique:true    // using validator for checking mobile number is unique;
    },
    address: {
        tyep: String,
        require: true,
        
    },
    rollnumber: {
        type: String,
        unique: true,
        require: true,
        
    }
})

const Student = model("Student", studentScema)
export default Student;




/* 
Write a POST api /students/:rollNumber where rollNumber will be received in path params. This api will receive 
some new mobile and address values for a student in the request body. The details will be updated for student with 
the given roll number. Mobile number is unique in collection so you have to handle cases for duplicate mobile
 number and return proper error message. 
*/
