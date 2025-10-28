const Product=require('../models/product')




const insertSampleProduct=async (req,res)=>{
    try{
        const sampleProduct=[
            {
                name:"laptop",
                category:"electronics",
                price:999,
                inStock:true,
                tags:["computer","tech"]
            },
            {
                name:"smartphone",
                category:"electronics",
                price:499,
                inStock:true,
                tags:["mobile","tech"]
            },
            {
                name:"running shoes",
                category:"sports",
                price:99,
                inStock:true,
                tags:["footwear","running"]
            },
            {
                name:"headphone",
                category:"electronics",
                price:199,
                inStock:false,
                tags:["audio","tech"]
            },
            {
                name:"novel",
                category:"books",
                price:49,
                inStock:true,
                tags:["fiction","bestseller"]
            },
        ]
        const result= await Product.insertMany(sampleProduct);
        res.status(201).json({
            success:true,
            message:`inserted ${result.length} sample products`
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:'some error occured'
        })
    }
}


module.exports=insertSampleProduct