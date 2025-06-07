const accountId = 145236
let emailId = 'test@gmail.com'
var accountPassword = "harshitsecure"
city = 'jaipur'
let accountState;
// updating the var, const, let

// accountId = update145236;  //const cann't be update or modify
emailId = 'updatetest@gmail.com'; //const can be update or modify
var accountPassword = "updateharshitsecure";  //const can be update or modify
city = 'pilibhit'     //default data type variable 

/*
Prefer not to use var because of issues in block scope and functional scope
*/
console.log('====================================');
console.log(city, accountId, accountState);
console.log('====================================');
console.log(accountId, emailId, accountPassword, city.accountState);
console.table([accountId, emailId, accountPassword, city, accountState]); //used to print in the form of table
