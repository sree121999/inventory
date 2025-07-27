const express=require('express')
const app=express()
const userrouter=require('./router/userRouter')


const PORT=3000

app.use(express.json())
app.use('/inventory',userrouter
    
)

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})