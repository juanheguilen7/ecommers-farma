import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required.']
    },
    email: {
        type: String,
        required: [true, 'Password is required.'],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Debe indicar un email válido']
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
})

const User = models.User || model("User", UserSchema);

export default User;