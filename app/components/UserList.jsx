import { getUsers } from "@/Database/actions/user";

async function UserList(props) {
    const users = await getUsers()
    console.log(users)

    return (
        <div>

        </div>
    );
}

export default UserList;