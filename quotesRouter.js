
quotesRouter = require('express').Router();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

quotesRouter.get('/', function(req, res, next) {

    if(!req.query.person ) {

        res.send(JSON.stringify({ quotes }))
        
    } else {
        
        const result = quotes.filter( quote => quote.person === req.query.person);

        res.send(JSON.stringify({quotes: result}))
    }
})


quotesRouter.post('/', function(req, res, next) {

    const { quote, person } = req.query;

    if(!quote || !person ) {
        res.status(400).send('Something wrong with parameters')
    } else {
        const newQuote = { quote, person };
        quotes.push(newQuote);
        res.send(JSON.stringify( { quote: newQuote }));
    }
    
})



quotesRouter.get('/random', (req, res, next) => {
    try{
        res.send(JSON.stringify({quote: getRandomElement(quotes) }))        
    } catch(e){
        console.log(e);
    }
})


module.exports = quotesRouter;