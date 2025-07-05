import mongoose, {Schema} from "mongoose";
import mongooseAggregatePagination from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, //cloudinary
            required: true
        },
        thumbnail:{
            type: String,//cloudinary
            required: true
        },
        title:{
            type:String,//
            required: true
        },
        description:{
            type:String,//cloudinary
            required: true
        },
        views:{
            type:Number,
            default: 0
        },
        ispublished:{
            type:Boolean,
            required: true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

},{timestamps:true})


videoSchema.plugin(mongooseAggregatePagination)

export const Video = mongoose.model("Video",videoSchema);