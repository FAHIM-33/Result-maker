// app/api/student/[id]/route.js

import connectMongo from "@/Database/connectMongo";
import Student from "@/Database/models/Student";

export async function GET(_req, { params }) {
    await connectMongo(); // Ensure MongoDB connection

    try {
        if (params.id === 'all') {
            const results = await Student.find();
            // Convert results to JSON and return with proper headers
            return new Response(JSON.stringify(results), {
                status: 200, // Set status to 200 OK
                headers: {
                    'Content-Type': 'application/json', // Set content type to JSON
                },
            });
        }

        // If the ID is not 'all', you might want to handle fetching a specific student
        const student = await Student.findById(params.id);
        if (!student) {
            return new Response(JSON.stringify({ message: 'Student not found' }), {
                status: 404, // Set status to 404 Not Found
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return new Response(JSON.stringify(student), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching students:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500, // Set status to 500 Internal Server Error
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function DELETE(_req, { params }) {
    const studentId = params.id

    await connectMongo()
    try {
        const res = await Student.deleteOne({ _id: studentId })
        return new Response(JSON.stringify({ deletedCount: res.deletedCount }))

    } catch (error) {
        console.error('Error fetching students:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


}
