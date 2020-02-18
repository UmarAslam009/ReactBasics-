// const square =(num)=>{
//   return num*num;
// }
const square = x => x * x;
console.log(square(8));

// const user={
//   name:'umar',
//   city:['lahore','isb','karachi'],
//   printCity:function(){
//     // console.log(this.name);
//     // console.log(this.city)
//     //const that=this;
//     this.city.forEach((city)=>{
//       console.log(this.name +'lived'+ city)
//     })
//   }
// }
const user = {
  name: "umar",
  city: ["lahore", "isb", "karachi"],
  printCity() {
    // console.log(this.name);
    // console.log(this.city)
    //const that=this;
    // this.city.forEach(city => {
    //   console.log(this.name + "lived" + city);
    // });
    const message=this.city.map((city)=>{
      return city;
    })
    return message;
  }
};
console.log(user.printCity())
