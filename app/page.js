import { getUsers } from "@/Database/actions/user";
import Calculator from "./components/Calculator";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";


export default function Home() {


  return (
    <div>
      <div>
        <UserList></UserList>
      </div>
      <UserForm />
      <Calculator />
    </div>

  );
}
