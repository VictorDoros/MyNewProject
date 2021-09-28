function Victor(fname, lname, salary){
    this.firstname = fname;
    this.lastname = lname;
    this.salariu = salary;

    this.fullname = function(age){
        return "My name is " + this.firstname + " " + this.lastname + ". I am " + age + " years old." 
        + "My monthly salary is " + this.salariu + "€.";
    }
    this.newsalary = function(sal){
        this.salariu = sal;
    }
}

let myVictor = new Victor("Victor", "Doroș", 1000);
myVictor.newsalary(4000);

console.log(myVictor.fullname(26));

