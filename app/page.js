import { getUsers } from "@/Database/actions/user";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Calculator from "./components/Calculator";

export default function Home() {


  return (
    <div className="pt-8">
      <Calculator />
    </div>

  );
}
