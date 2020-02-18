class Person {
  constructor(name = "Anonymous") {
    this.name = name;
    // console.log(name);
  }
  getGretting() {
    // return 'hi i am '+this.name;
    return `Hi i am ${this.name}`;
  }
  getDiscription(){
    return `${this.name} is nice person`
  }
}
class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age=age;
  }
  hasMajor(){
    return !!this.age;
  }
  getGretting() {
    // return 'hi i am '+this.name;
    return `Hi i am `;
  }
  getDiscription(){
    let description=super.getDiscription()
    if(this.hasMajor()){
      description +=`his age is ${this.age}`
    }
    return description;
  }
}
class Traverler extends Student {
  constructor(name, age,location) {
    super(name,age);
    this.location=location;
  }
  getLocation(){
    let discription=super.getGretting();
    return discription +=`from ${this.location ? this.location:''}`
  }
}
// const me = new Person("umar aslam");
// const other=new Person()

const me = new Traverler("umar aslam", 26,'lahore');
const other = new Traverler('ali',28,'karachi');

console.log(me.getLocation());
console.log(other.getLocation());
