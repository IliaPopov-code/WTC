const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const json = require('/Users/iliapopov/wtc-app/wtc-files/problemSet.json');
console.log(json);

fn = eval(json.probability.bruhb.function);
a = json.probability.bruhb.variables.a;

var randomIndexA = Math.floor(Math.random() * a.length);
var randomIndexB = Math.floor(Math.random() * b.length);

// Get the random variable
var randomA = a[randomIndex];


console.log(fn(randomA));
app.get('/', (req,res) => {
    res.send('Hello world!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});