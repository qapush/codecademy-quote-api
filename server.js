const express = require('express');
const quotesRouter = require('./quotesRouter');

const app = express();

const PORT = process.env.PORT || 4001;



app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Listening to ' +  PORT);
})

app.use('/api/quotes', quotesRouter);



