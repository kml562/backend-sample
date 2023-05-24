import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema, model } = mongoose;

let postScema = new Schema({
    Heading: {
        type: String,
        unique: true,
        required: true,
    },
    AuthorID: {
        type: ObjectId,
        required: true,
        ref: "User"
    },
    Post: {
        type: String,
        enum: ["book", "notes"],
        default: "false",
    },
    price: {
        type: Number,
        default: 100,
        
    },
    isHardCover:{
        type: Boolean,
        default:false,
    }
    
    
}, { timestamps: true })


const Post = model("Post", postScema);
export default Post;
