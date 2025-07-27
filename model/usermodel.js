let inventory=[{
    "id":1,
    "name":"shirt",
    "price":350,
    "quantity":10,
},

{
    "id":2,
    "name":"pant",
    "price":900,
    "quantity":25,
},

{
    "id":3,
    "name":"kurta",
    "price":500,
    "quantity":15,
},
{
    "id":4,
    "name":"skirt",
    "price":650,
    "quantity":20,
},
]


const getmodels=()=>inventory

const additemdb=(item)=>{
    inventory.push(item)
    return item
}


const deleteitemdb=(id)=>{
    inventory=inventory.filter(item=>item.id!==id)
    return inventory

}



module.exports={getmodels,additemdb,deleteitemdb}