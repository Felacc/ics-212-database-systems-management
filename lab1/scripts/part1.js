// For this portion of the lab I am just going to be copy/pasting commands
// into the interactive mongodb shell in a db called "labs"

// Task 1: Insert at least 3 different inventory items
db.inventory.insertMany([
    {
        name: "tomato", 
        quantity: 15, 
        category: "fruit"
    },
    {
        name: "beef", 
        quantity: 10, 
        category: "meat"
    },
    {
        name: "spaghetti", 
        quantity: 25, 
        category: "pasta"
    }
]);

// Task 2: Update the quantity of one item
db.inventory.updateOne(
    {name: "spaghetti"},
    {$set: {quantity: 100}}
);

// Task 3: Add a new field to one item
db.inventory.updateOne(
    { name: "tomato" },
    { $set: { attribute: "vegetableish" } }
);

// Task 4: Write a query to find all items in a specific category
db.inventory.find({category: "meat"});

// Task 5: Delete one item and show it is removed
db.inventory.deleteOne( {name: "beef" } );