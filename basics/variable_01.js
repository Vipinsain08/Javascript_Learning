const accountId = 14125
let accountEmail = "vipin@gamil.com"
var accountPassword = "24512"
accountCity = "Haryana"

// we can define the variable without initializing it , output while printing is "undefined"
let accountState;


//try to changin the const
// accountId = 111111  not allowed

accountEmail = "vipin08@gamil.com"
accountPassword = "1212121"
accountCity = "chandigarh"


console.log(accountId);

/* prefer not to use "var" because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

