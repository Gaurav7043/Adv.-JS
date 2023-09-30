let familyTree = {
    name: "test",
    age: 98,
    child: [
      {
        id: 10001,
        name: "vishnubhai",
        age: 55,
        occupation: "retired",
        vehicle: [
          {
            name: "passsion",
            number: 5040,
          },
          {
            name: "thar",
            number: 1111,
          },
        ],
        son: [
          {
            name: "urvish",
            age: 22,
          },
          {
            name: "toral",
            age: 30,
          },
        ],
      },
      {
        id: 10002,
        name: "jitubhai",
        age: 42,
        occupation: "retired",
        vehicle: [
          {
            name: "passsion",
            number: 5040,
          },
          {
            name: "thar",
            number: 1111,
          },
        ],
        son: [
          {
            name: "jigar",
            age: 29,
          },
          {
            name: "kavya",
            age: 32,
          },
        ],
      },
      {
        id: 10003,
        name: "gauravbhai",
        age: 65,
        occupation: "retired",
        vehicle: [
          {
            name: "passsion",
            number: 6448,
          },
          {
            name: "thar",
            number: 2522,
          },
        ],
        son: [
          {
            name: "om",
            age: 22,
          },
          {
            name: "harsh",
            age: 30,
          },
        ],
      },
    ],
  };
    
  /*
  1. dada ka name
  2. dada's 2nd child name
  3. dada's 2nd child's 2nd son
  4. dada's 3nd child's 1st vehicle name
  5. dada's 1st child's 1st vehicle number
  */

// 1. dada ka name
// familyTree.name
console.log(familyTree.name)

// 2. dada's 2nd child name
// familyTree.child[1].name
console.log(familyTree.child[1].name)

// 3. dada's 2nd child's 2nd son
// familyTree.child[1].son[1].name
console.log(familyTree.child[1].son[1].name)

// 4. dada's 3nd child's 1st vehicle name
// familyTree.child[2].vehicle[0].number
console.log(familyTree.child[2].vehicle[0].number)

// 5. dada's 1st child's 1st vehicle number
// familyTree.child[0].vehicle[0].number
console.log(familyTree.child[0].vehicle[0].number)