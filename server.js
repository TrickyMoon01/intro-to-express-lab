// Import Express
const express = require('express')

// Create an Express app
const app = express()
// Define routes here (we'll add them soon)

// Listen for requests on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// Define routes here:

// 1.
app.get('/greetings/:nameId/', (req, res) => {
    // Accessing query parameters from the request
    const name = req.query.name;
    const nameId = req.query.nameId;

    // Using the query parameters to customize the response
    res.send(`Hello there, ${req.params.nameId}!`);
});

// 2.
app.get('/roll/:rollId/', (req, res) => {
    // Accessing query parameters from the request
    const roll = req.query.roll;
    const rollId = req.params.rollId;


    const banana = Number (rollId);
    console.log(banana);
    if (isNaN(banana)) {
        return res.send("You must specify a number.")
    }
    // Using the query parameters to customize the response

    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomRoll = getRandomInt(banana);
res.send(`You rolled a ${randomRoll}`);
});

// 3.
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index/', (req, res) => {
    // Accessing query parameters from the request
    const index = req.params.index;
    const i = parseInt(index);
    if (!collectibles[i]) {
    return res.send(`This item is not yet in stock. Check back soon!`);
    } else {
    const name = req.query.name;
    const price = req.query.price;
    res.send(`So you want the ${collectibles[i].name}? For ${collectibles[i].price}, it can be yours!`);
}});

// 4.
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  app.get("/shoes", (req, res) => {
    const name = req.query.name
    const minPrice = parseInt(req.query.min-price)
    const maxPrice = parseInt(req.query.max-price)
    const type = req.query.type
    console.log(type)

    if (type) {
        const banana = shoes.filter(shoe => 
            shoe.type === type
        )
        res.send(`the shoe is ${JSON.stringify(banana)}`)
    };

    // min-price
    if (minPrice) {
        const inPrice = shoes.filter(shoe => shoe.price > minPrice)
        res.send(`the shoe is ${JSON.stringify(inPrice)}`)
    }
    // max-price
    if (maxPrice) {
        const axPrice = shoes.filter(shoe => shoe.price < maxPrice)
        res.send(`the shoe is ${JSON.stringify(axPrice)}`)
    }
    // type of shoes
    if (type === sandal) {
        const ype = shoes.filter(shoe => shoe.type === type)
        res.send(`the shoe is ${JSON.stringify(ype)}`)
    }
})
    // no parameters
    if (shoes === "") {
        res.send(shoes);
    }
