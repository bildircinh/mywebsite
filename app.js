import express from 'express' 
import expressLayouts from 'express-ejs-layouts'

const app = express()
const port = 3000;

app.use(expressLayouts)
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('layout', 'layout')
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)


app.get('/', (req,res)=>{
    res.render('home')
})




app.get('*', (req,res)=>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`)
})