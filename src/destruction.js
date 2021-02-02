const cafe = {
    name: "Jenny's",
    capacity: 6
    menu: {
        sandwich: {
            price: 5
        },
        curry: {
            price: 6
        }
    }
};

// assign the following variables using the dreaded destructuring
// cafeName = the name of the cafe
// sandwichPrice = the price of a sandwich
// run npm t destruction.test.js to see if you've got it right

module.exports = { cafeName, sandwichPrice };