import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    product_name: {
        type: String,
        required: [true, "Please enter Product name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter Product description"],
    },
    price: {
        type: Number,
        required: [true, "Please enter Product Price"],
        maxLength: [7, "Price can't be exceed 7 digits"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter Product Category"],
    },
    stocks: {
        type: Number,
        required: [true, "Please enter Product Stocks"],
        maxLength: [5, "Stocks can't be exceed 5 digits"]
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: { type: String, required: true },
            rating: {
                type: Number,
                required: true
            },
            comments: {
                type: String,
                required: true
            }
        }
    ],
}, { timestamps: true })

export default mongoose.model("Product", productSchema);
