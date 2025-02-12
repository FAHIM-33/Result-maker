import UserList from "../components/UserList";

export default async function AllUsersPage() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/student/all`, {
        cache: "no-store",
        next: { tags: ["allStudents"] }
    });

    let students = [];

    if (response.ok) {
        students = await response.json();
    } else {
        console.error("Failed to fetch students");
    }

    return (
        <div>
            <h1 className="text-2xl lg:mt-12 mt-8">Results</h1>
            <UserList students={students} />
        </div>
    );
}

