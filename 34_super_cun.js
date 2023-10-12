class ComUser{
    constructor(fees_amt, salary_amt){
        this.fees = fees_amt
        this.salary = salary_amt
    }
    login(){
        console.log("-------login--------");
    }
}

class Teacher extends ComUser{
    salary_print(){
        console.log("------salary----------", this.salary);
    }
}

class Student extends ComUser{
    constructor(fees_amt_child){
        super(fees_amt_child)
        this.fee = 10000
    }
    fees_print(){
        console.log("--------fees----------", this.fees);
    }
}

const STU = new Student(2999)
STU.fees_print()
// STU.login()
const TECH = new Teacher(null, 89999)
TECH.salary_print()
// TECH.login()