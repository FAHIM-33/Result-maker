"use server"

import { revalidatePath } from "next/cache";

const { default: connectMongo } = require("../connectMongo");
const { default: Student } = require("../models/Student");

const addResult = async (studentData) => {
    // console.log(studentData);
    try {
        // Connect to MongoDB
        await connectMongo();
        // Create a new student record
        const newStudent = new Student(studentData);
        // Save the record to MongoDB
        await newStudent.save();
        revalidatePath('/all-users')

        // console.log("Student result saved successfully:", newStudent);
    } catch (error) {
        console.error("Error saving student data:", error);
        throw new Error("Failed to save student data");
    }

}


export { addResult }