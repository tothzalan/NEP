const express = require('express')
const app = express()
const port = 8000

app.use(express.static('src'))
app.set('views', "./src")
app.set('view engine', 'pug')

app.get('/', function(req,res) {
    res.render('index', {title: 'NEP', msg: 'Node.js + Express.js + Pug'})
})

app.listen(port, () => console.log(`App listening on port ${port}`))