import { asyncError } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/error.js";
import cloudinary from "cloudinary";
import { getDataUri } from "../utils/features.js";

export const getAllProducts = asyncError (async (req, res, next) => {
    const products = await Product.find({});

    res.status(200).json({
        success: true,
        products,
    });
});
export const getProductDetails = asyncError (async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) return next(new ErrorHandler("Product not found", 404));

    res.status(200).json({
        success: true,
        product,
    });
});
export const createProduct = asyncError (async (req, res, next) => {
    const {name, description, category, price, stock} = req.body;

    if(!req.file) return next(new ErrorHandler("Please add image", 400));

    const file= getDataUri(req.file);  
         const myCloud = await cloudinary.v2.uploader.upload(file.content);
         const image = {
          public_id: myCloud.public_id,
          url:myCloud.secure_url,
        };

        await Product.create({
            name,description,category,price,stock,
            images: [image],
        });

    res.status(200).json({
        success: true,
        message:"Product Created Succesfully",
    });
});


export const updateProduct = asyncError (async (req, res, next) => {
    const {name, description, category, price, stock} = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorHandler("Product not found", 404));

    if(name) product.name=name;
    if(description) product.description = description;
    if(category) product.category = category;
    if(price) product.price = price;
    if(stock) product.stock = stock;

    await product.save();

    res.status(200).json({
        success: true,
        message:"Product Updated Succesfully",
    });
});

export const addProductImage = asyncError (async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorHandler("Product not found", 404));

    if(!req.file) return next(new ErrorHandler("Please add image", 400));

    const file= getDataUri(req.file);  
         const myCloud = await cloudinary.v2.uploader.upload(file.content);
         const image = {
          public_id: myCloud.public_id,
          url:myCloud.secure_url,
        };

        product.images.push(image);
        await product.save();

    res.status(200).json({
        success: true,
        message:"Image Added Succesfully",
    });
});
