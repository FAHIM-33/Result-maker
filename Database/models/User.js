import mongoose from "mongoose"

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 100
    },
    // email: { type: String }asdf
})

const User = mongoose.models.User || mongoose.model('User', userScheme)

export default User;
