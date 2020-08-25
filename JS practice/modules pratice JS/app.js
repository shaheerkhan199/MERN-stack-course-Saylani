// Importing (Default export) Class
import {Mobile, admin, Human} from "./mobile.js"
var m = new Mobile();
var h = new Human();

m.ring();

h.walking();

console.log(admin);


// Importing (Default export) function
import greet_user from "./mobile.js"
greet_user();