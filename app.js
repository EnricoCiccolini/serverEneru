const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');
const reviewsRouter = require('./router/reviews');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');


const corsOptions = {
    origin: 'https://enerugame.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/reviews', reviewsRouter);

app.use(express.static('public'));
app.use(errorHandler);

app.use(notFound);

app.listen(port, () => {
    console.log(`sono sulla porta ${port}`);
});