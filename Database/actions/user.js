const { default: connectMongo } = require("../connectMongo");
const { default: User } = require("../models/user");

const addUser = async (formData) => {
    "use server"
    const name = formData.get('name');
    const userData = { name }
    console.log(userData)
    await connectMongo()
    await new User(userData).save()
}
const getUsers = async () => {
    await connectMongo()
    await User.find()
}

export { addUser, getUsers }