"use server"
const { default: connectMongo } = require("../connectMongo");
const { default: Student } = require("../models/Student");

const addResult = async (studentData) => {
    console.log(studentData);
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

const deleteResultById = async (req, res) => {
    const resultId = req.params.id
    await connectMongo()
    const result = await Student.deleteOne({ _id: resultId })
    if (result.deletedCount === 0) {
        return res.status(400).send({ message: 'Result not found' })
    }
    return res.status(200).send({ message: "Delete result", deletedCount: result.deletedCount })

}

export { addResult, getResulets, deleteResultById }