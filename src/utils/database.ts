import mongoose from "mongoose";

let isConnected: boolean = false;



export const connectionToDB = async () => {
    const mongoUri: string | undefined = process.env.MONGODB_URI;
    
    if (!mongoUri) {
        throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(mongoUri, {
            dbName: 'farmaEcommers',
        })
        isConnected = true;

        console.log('MongoDB connected')

    } catch (error) {
        console.log(error)

    }
}