const express = require('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')
const app = express()

const userRouters = require('./app/routes/user')
const userItems = require('./app/routes/items')


const port = 3001

// app.get('/', (req, res) => {
//     res.send({
//         data: 'Hola test'
//     })
// })
app.use(
    bodyParser.json({
        limit: '20mb',
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true,
    })
)

app.use(userRouters)
app.use(userItems)

app.listen(port, () => {
    console.log('app en linea')
})

initDB();