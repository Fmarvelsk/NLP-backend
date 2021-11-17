import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    Names : {
        type: String
    },
    Transcription : {
        type : String
    },
    Description: {
        type: String
    },
    Image: {
        type : String
    }

})

const School = mongoose.model('school', WordSchema);

export default School;