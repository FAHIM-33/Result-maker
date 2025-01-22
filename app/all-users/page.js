import UserList from "../components/UserList";

function allUsersPage(props) {
    return (
        <div>
            <h1 className="text-2xl lg:mt-12 mt-8">Results</h1>
            <UserList></UserList>
        </div>
    );
}

export default allUsersPage;