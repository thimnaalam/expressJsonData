import express from 'express'

// Express application
const app = express()
// Router
const router = express.Router()
// Port
const port = +process.env.Port || 4000
// Json url
const dataURL ='file:///C:/Users/Students/Downloads/index.json'
// Application middleware
app.use(
    router
)
// / => home
router.get('^/$|/ejd', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'Ola amigos'
    })
})
// fetch all education
router.get('/education',async (req, res)=>{
  let {education} = (await fetch(dataURL)).json()
  res.json({
    status: res.statusCode,
    education
  })
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})