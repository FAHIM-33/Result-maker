import connectMongo from "@/dbConnect/connectMongo";
import User from "@/dbConnect/models/user";

function UserForm() {
    const addUser = async (formData) => {
        "use server"
        const name = formData.get('name');
        const userData = { name }
        console.log(userData)
        await connectMongo()
        await new User(userData).save()
    }

    return (
        <form
            action={addUser}
            className="mb-12 flex flex-col gap-4">
            <div>
                <input type="text" name="name" placeholder="Name" className="bg-black border rounded-md outline-none p-2" />
                {/* <input type="email" name="email" placeholder="email" className="bg-black border rounded-md outline-none p-2" /> */}

            </div>
            {/* <div>
    <input type="email" name="email" placeholder="email" />
  </div> */}
            <button type="submit" className="brr">Submit</button>

        </form>
    );
}

export default UserForm;