# fixer-io-node

# Description
A node module that interacts with the fixer.io API (http://api.fixer.io). The API requires a query string to be added and they are added to the functions when they are called.

# How to Install
npm install fixer-io-node --save

# How to Use
```javascript
var api = require('fixer-io-node');

# latest
The function returns the latest currency exchange rates with EURO as its base currency

api.latest('latest').then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})

# base
The function returns the latest currency rates passing USD as its base currency. Other currencies like GBP, AUD, EUR, BGN etc
can be used

api.base('USD').then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})

# historical
The function gets historical rates for any day since 1999

api.historical('2005-05-10').then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})

N.B: Date format: YYYY-MM-DD

# specificRate
Returns specific exchange rates

api.specificRate('USD', 'GBP').then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
})








