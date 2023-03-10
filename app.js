import express from 'express'
import expressLayouts from 'express-ejs-layouts'

const app = express()
const port = 3000;

app.use(expressLayouts)
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('layout', 'layout_inner')
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)


app.get('/', (req, res) => {
    res.render('index', { layout: 'layout' })
})


app.get('/iletisim', (req, res) => {
    res.render('contact')
})

app.get('/hakkimizda', (req, res) => {
    res.render('about')
})

app.get('/hizmetlerimiz', (req, res) => {
    res.render('services')
})

app.get('/blog/en-iyi-web-tasarim-programlari-hangileridir', (req, res) => {
    res.render('blog/en-iyi-web-tasarim-programlari-hangileridir')
})

app.get('/blog/ssl-sertifikasi-nedir-ne-ise-yarar-nasil-alinir', (req, res) => {
    res.render('blog/ssl-sertifikasi-nedir-ne-ise-yarar-nasil-alinir')
})



app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})