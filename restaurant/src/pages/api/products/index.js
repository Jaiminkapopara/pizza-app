import Product from "models/Product"
import dbConnect from "util/mongo"

export default async function  handler (req, res) {
    const { method, cookies } = req

    const token = cookies.token

    dbConnect()

    if(method === 'GET') {
        try{
            const products = await Product.find()
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === 'POST') {
        if(!token && token !== process.env.token){
            // console.log(!token);
            // console.log(token !== process.env.token);
            // console.log(process.env.TOKEN);
            // console.log(token);

            return res.status(401).json('Not authenticated!')

        }
        try {
            const product = await Product.create(req.body);
            
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
          }
    }
}