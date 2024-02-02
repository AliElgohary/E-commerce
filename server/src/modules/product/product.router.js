import express from 'express';

const productRouter = express.Router()

productRouter.get('/product' , (req,res) => {
    res.send({hello: "hello from product"})
})


export default productRouter