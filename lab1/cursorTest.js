db.sampledata.insertMany([
    {name: "datum john", attribute: "cool"},
    {name: "datum jane", attribute: "smart"},
    {name: "datum mary", attribute: "mother"},
    {name: "datum mark", attribute: "generally unwell"},
    {name: "datum dave", attribute: "grumpy"},
    {name: "datum lisa", attribute: "plays saxophone"},
    {name: "datum bart", attribute: "skateboards"},
    {name: "datum carl", attribute: "ex-con"},
    {name: "datum zach", attribute: "dry"},
    {name: "datum paul", attribute: "alien"}
]);

const cursor = db.sample.data.find({});

cursor.forEach(doc => {
    print(`${doc.name} is ${doc.attribute}`);
});

