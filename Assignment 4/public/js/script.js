// Functions to increase and decrease the quantity of products in cart
function increment(textBoxId){
    var textBox = document.getElementById(textBoxId);
    var textBoxValue = Number(textBox.value);
    textBoxValue++;
    textBox.value = textBoxValue;
}
function decrement(textBoxId){
    var textBox = document.getElementById(textBoxId);
    var textBoxValue = Number(textBox.value);
    if(textBoxValue != 1){
        textBoxValue--;
    }
    textBox.value = textBoxValue;
}