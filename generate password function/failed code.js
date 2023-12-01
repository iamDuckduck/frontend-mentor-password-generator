var slideValue = document.getElementById('range');
var y = document.getElementById('f')
y.innerHTML = slideValue.value;

slideValue.oninput = function() {
    y.innerHTML = this.value
}

const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '/', '?', '|'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var selectedType = [];

var length = 8;

var upperStat = true;
var lowerStat = true;
var numberStat  = true;
var symbolsStat  = true;

var upperCount = true;
var lowerCount = true;
var numberCount = true;
var symbolCount = true;

var selectedCount = 0;

if (upperStat == true) {
    selectedType.push(...uppercaseLetters);
    selectedCount++;
    upperCount = false;
}

if (lowerStat == true) {
    selectedType.push(...lowercaseLetters);
    selectedCount++;
    lowerCount = false;
}


if (numberStat == true) {
    selectedType.push(...numbers);
    selectedCount++;
    numberCount = false;
}


if (symbolsStat == true) {
    selectedType.push(...symbols);
    selectedCount++;
    symbolCount = false;
}


var password = [];

for (let k = 0; k < length; k++) {
    var randomPassword = Math.floor(Math.random() * (selectedType.length));
    password.push(selectedType[randomPassword]);


    if (upperCount == false){
        for (let i = 0; i < uppercaseLetters.length; i++) {
            if (selectedType[randomPassword] == uppercaseLetters[i]) {
                upperCount = true;
                selectedCount--;
            }
        }
    }

    
    if (lowerCount == false){
        for (let i = 0; i < lowercaseLetters.length; i++) {
            if (selectedType[randomPassword] == lowercaseLetters[i]) {
                lowerCount = true;
                selectedCount--;
            }
        }
    }

    if (numberCount == false){
        for (let i = 0; i < numbers.length; i++) {
            if (selectedType[randomPassword] == numbers[i]) {
                numberCount = true;
                selectedCount--;
            }
        }
    }

    if (symbolCount == false){
        for (let i = 0; i < symbols.length; i++) {
            if (selectedType[randomPassword] == symbols[i]) {
                symbolCount = true;
                selectedCount--;
            }
        }
    }

}

console.log('selectedCount before');
console.log(selectedCount);
console.log('password before');
console.log(password);

console.log('before count');
console.log(upperCount);
console.log(lowerCount);
console.log(numberCount);
console.log(symbolCount);

const indexToRemove = length - selectedCount; 
password.splice(indexToRemove, selectedCount); // Removes one item from the array starting at the specified index
console.log(password); 


while (selectedCount != 0) {
    var randomPassword = Math.floor(Math.random() * (selectedType.length));

    if (upperCount == false){
        for (let i = 0; i < uppercaseLetters.length; i++) {
            if (selectedType[randomPassword] == uppercaseLetters[i]) {
                upperCount = true;
                selectedCount--;
                password.push(selectedType[randomPassword]);
            }
        }
    }

    
    if (lowerCount == false){
        for (let i = 0; i < lowercaseLetters.length; i++) {
            if (selectedType[randomPassword] == lowercaseLetters[i]) {
                lowerCount = true;
                selectedCount--;
                password.push(selectedType[randomPassword]);
            }
        }
    }

    if (numberCount == false){
        for (let i = 0; i < numbers.length; i++) {
            if (selectedType[randomPassword] == numbers[i]) {
                numberCount = true;
                selectedCount--;
                password.push(selectedType[randomPassword]);
            }
        }
    }

    if (symbolCount == false){
        for (let i = 0; i < symbols.length; i++) {
            if (selectedType[randomPassword] == symbols[i]) {
                symbolCount = true;
                selectedCount--;
                password.push(selectedType[randomPassword]);
            }
        }
    }
}

console.log(password); 
    


    



