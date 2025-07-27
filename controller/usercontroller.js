const { getmodels, additemdb, deleteitemdb } = require("../model/usermodel")



const getallitems=(req,res)=>{

    const items=getmodels()
    res.status(200).json({data:items})
}


const additem=(req,res)=>{
    const{id,name,price,quantity}=req.body


   if (!id || !name || !price || !quantity) {
        return res.status(400).json({ message: 'All fields (id, name, price, quantity) are required' })
    }
    const newitem={id,name,quantity,price}
    additemdb(newitem)
    const updateditem=getmodels()
    
    res.status(201).json({message:"item created",data:updateditem})
}

const deleteitem=(req,res)=>{
    console.log(req.params.id)
    const id=parseInt(req.params.id)
    const updatedinventory=deleteitemdb(id)
    res.json({message:'item deleted',updatedinventory})

}




module.exports={getallitems,additem,deleteitem}