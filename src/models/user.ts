import { Schema, model, models } from "mongoose";

interface PropsSchemaUser {
    username: String;
    lastname: String;
    password: String;
    email: String;
    rol?: String;
    cart?: Schema.Types.ObjectId;
    bookmark?: Schema.Types.ObjectId;
}

const UserSchema = new Schema<PropsSchemaUser>({
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
        required: [true, 'Email is required.']
    },
    email: {
        type: String,
        required: [true, 'Password is required.'],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Debe indicar un email válido'],
        unique: true
    },
    rol: {
        type: String,
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },
    bookmark: {
        type: Schema.Types.ObjectId,
        ref: 'Bookmark'
    }

})

const User = models.User || model<PropsSchemaUser>("User", UserSchema);

export default User;