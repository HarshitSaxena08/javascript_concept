const person = {
    fullName : "Harshit Saxena",
    age: 23,
    isStudent: false,
    hobby: ["badmintion", "football", "basket ball"],
    address:{
        street:"12 coch gahgsyhbjg",
        city: "delhi",
        country:"India"
    }
}

console.log('============== Use to access hobby array ======================');
for (const property in person.hobby){
console.log(person.hobby[property]);
}
console.log('====================================');

console.log('============== Use to access address nested object ======================');
for (const property in person.address){
console.log(person.address[property]);
}
console.log('====================================');

console.log('============== Use to access person object ======================');
for (const property in person){
console.log(person[property]);
}
console.log('====================================');

console.table(person);
