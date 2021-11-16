import mongoose from 'mongoose';
import dotenv from 'dotenv';
 dotenv.config();

const URI = process.env.DB_SCHOOL_TRANSLATION

const options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
}

const ConnectDB = async () => {
    await mongoose.connect(URI, options);
    console.log('Db connected.....')
}

export default ConnectDB;