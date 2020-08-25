// Only one defalut export per module is allowed
// Exporting (named export) Class
class Mobile{
    ring(){
        console.log("Samsung Mobile is ringing");
    }
}

class Human{
    walking(){
        console.log("human is walking");
    }
}

export {Mobile, Human};

// Exporting (Default export) function
function greet_user(){
    console.log("hello user from module");
}
export default greet_user;

// Exporting (named export) variable
export var admin = "sheri"; 