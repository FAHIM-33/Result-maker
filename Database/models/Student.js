import mongoose from "mongoose"

const subjectSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    mark: { type: String, default: '' },
    gpa: { type: String, default: '' },
    grade: { type: String, default: '' }
});

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mark: { type: String, required: true},
    gpa: { type: String, required: true},
    // grade: { type: String, required: true},
    subjects: [subjectSchema]
})

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema)

export default Student;
