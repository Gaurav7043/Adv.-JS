let familytree = {
    name: "suresh",
    age: 80,
    child: [
        {
            name: "harsh",
            age: 38,
            ocuupation: "labour",
            vehicle: [
                {
                    name: "Shine",
                    number: 2232,
                },
                {
                    name: "thar",
                    number: 4444,
                },
            ],
            son: [
                {
                    name: "om",
                    age: 20,
                },
                {
                    name: "som",
                    age: 22,
                },
            ],
        },
        {
            name: "Gaurav",
            age: 42,
            ocuupation: "labour",
            vehicle: [
                {
                    name: "Shine",
                    number: 1234,
                },
                {
                    name: "thar",
                    number: 1235,
                },
            ],
            son: [
                {
                    name: "shiv",
                },
            ],
        },
        {
            name: "shiva",
            age: 50,
            ocuupation: "labour",
            vehicle: [
                {
                    name: "DUKE",
                    number: 1234,
                    type: "Bike",
                },
                {
                    name: "thar",
                    number: 1234,
                    type: "car",
                },
            ],
            son: [
                {
                    name: "akash",
                },
            ],
        },
    ],
};

// 01 make data storage for your family and vehicle details of each family member
console.log(familytree)
  
// 02 all son of your dada name only
console.log(familytree.name);
console.log(familytree.child[1].name);
console.log(familytree.child[2].name);

// 03 badha family ni vehicale details like me j
console.log(familytree.child[0].vehicle[0].number);