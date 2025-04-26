const express = require('express')
const app = express()
const port = 3003
const reviewsRouter = require('./router/reviews')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')


app.use(express.json())

app.use('/reviews', reviewsRouter)


app.use(express.static('public'))
app.use(errorHandler)



app.use(notFound)


app.listen(port, () => {
    console.log(`sono sulla porta${port}`)
})




