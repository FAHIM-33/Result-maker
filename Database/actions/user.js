"use server"
const { default: connectMongo } = require("../connectMongo");
const { default: Student } = require("../models/Student");

// const name = formData.get('name');
// const userData = { name }
// await new Student(formData).save()
const addResult = async (studentData) => {
    // "use server"
    // console.log(studentData);
    try {
        // Connect to MongoDB
        await connectMongo();
        // Create a new student record
        const newStudent = new Student(studentData);
        // Save the record to MongoDB
        await newStudent.save();

        // console.log("Student result saved successfully:", newStudent);
    } catch (error) {
        console.error("Error saving student data:", error);
        throw new Error("Failed to save student data");
    }

}

const getResulets = async () => {
    await connectMongo()
    const students = Student.find()
    return students
}

export { addResult, getResulets }