import UserList from "../components/UserList";

function allUsersPage(props) {
    return (
        <div>
            <h1 className="text-2xl">Results</h1>
            <UserList></UserList>
        </div>
    );
}

export default allUsersPage;