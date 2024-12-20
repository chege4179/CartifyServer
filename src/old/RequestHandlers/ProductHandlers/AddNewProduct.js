const path = require('path')
const ProductModel = require('../../Models/ProductModel')
const fs = require("fs");
const cloudinary = require('cloudinary').v2
const crypto = require('crypto')
const { productsIndex } = require('../../util/config')

const AddNewProduct  = async (req,res) => {
    let imageURLs = []
    try{
        for (const image in req.files){
            const id = crypto.randomBytes(16).toString("hex")
            const { secure_url,public_id } = await UploadProductImage(req.files[image].tempFilePath,req.files[image].name,id)
            .catch((err) => {
                console.log('Error  HERE',err)
            })
            imageURLs.push({ url:secure_url,id:public_id })

        }

        const newProduct = new ProductModel({
            ...req.body,
            images:imageURLs
        })
        newProduct.save()
        .then(() => {
            fs.rmdir(path.join(__dirname,'../../','tmp'),{ recursive:true },(err) => {
                if (err){
                    console.log(err)
                    return res.json({
                        msg:'An error occurred while deleting the tmp directory',
                        success:false,
                    })

                }else {
                    productsIndex.saveObject(newProduct,{
                        autoGenerateObjectIDIfNotExist: true
                    }).then(() => {
                        return res.json({
                            msg:'Product saved successfully',
                            success:true,
                            newProduct
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        return res.json({
                            msg:err.message,
                            success:false,

                        })
                    })

                }
            })
        })
        .catch((e) => {
            console.log(e)
            return res.json({
                msg:e.message,
                success:false
            })
        })

    }catch (e){
        console.log(e)
        return res.json({
            msg:'something went wrong',
            success:false
        })
    }

}

function UploadProductImage(ImagePath,ImageName,randomId){
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(ImagePath,
            {
                resource_type: "image",
                public_id: `cartify/${randomId}`,
                chunk_size: 6000000,
                eager_async: true,
                eager_notification_url: "https://mysite.example.com/notify_endpoint"
            },
            (error, result) => {

                if (error){
                    reject(error)
                    console.log("Error >>>",error)
                    return error
                }else {
                    resolve(result)
                }
            });
    })

}
module.exports = { AddNewProduct }
const categories = [
    {
        id:13,
        name:'Shops',
    },
    {
        id:6,
        name:'Fashion'
    },
    {
        id:1,
        name:'Health and Beauty'
    },
    {
        id:2,
        name:'Home and Office'
    },
    {
        id:3,
        name:'Phone and Tablets'
    },
    {
        id:4,
        name:'Computing'
    },
    {
        id:5,
        name:'Electronics'
    },

    {
        id:7,
        name:'Food'
    },
    {
        id:8,
        name:'Real Estate'
    },
    {
        id:9,
        name:'Gaming'
    },
    {
        id:10,
        name:'Customer Services'
    },
    {
        id:11,
        name:'Baby Products'
    },
    {
        id:12,
        name:'Sporting Goods'
    }
]
console.log(path.join(__dirname,'../../','tmp'))
