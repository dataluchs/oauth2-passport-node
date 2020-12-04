require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())


app.use('/', (req, res) => {
    res.send('hi from node')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on ${PORT}!`))