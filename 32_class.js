/*
// static
// two type => methods & data member
class User{
    // constructor
    constructor(){
        console.log("----constructor----");
        this.name = "Gaurav"
        this.age = 22
    }
    // methods
    print_name(){
        console.log("---print_name---", this.name);
    }
    print_age(){
        console.log("---print_age---", this.age);
    }
}

const class1 = new User()
const class2 = new User()
console.log("class1:", class1);
console.log("class2:", class2);

// method use
class1.print_name()
class1.print_age()

*/

/*
// dynamic
class User{
    // constructor
    constructor(name, age){
        console.log("----constructor----");
        this.name = name
        this.age = age
    }
    // methods
    print_name(){
        console.log("---print_name---", this.name);
    }
    print_age(x){
        console.log(`My age will be ${this.age + x} after ${x} Year:`);
        console.log("---print_age---", this.age);
    }
    sum(a, b){
        return a + b
    }
}

const class1 = new User("Gaurav", 22)
const class2 = new User("Harsh", 21)
console.log("class1:", class1);
console.log("class2:", class2);

// method use
console.log("--------class one------------");
class1.print_name()
class1.print_age(10)

console.log("--------class two------------");
class2.print_name()
class2.print_age(10)

let total = class1.sum(99, 90)
console.log("total:", total)

*/

class School{
    define_data(){
        this.school = "Decent Child High School"
    }
    print(){
        console.log(`My school name is ${this.school}`);
    }
}

const abc = new School()
console.log("abc:", abc)
abc.print()
abc.define_data()
console.log("abc:", abc)
abc.print()