//generate password by button
const generated_pw = document.getElementById('generated_pw');
const generate_button = document.getElementById('generate-button');
generate_button.addEventListener("click", password_generation);

//err message
let err = document.getElementById('error');

// 1 for ticked, 0 for not ticked
const setting = [0, 0, 0, 0];
let setting_count = 0;

//assign eventlistener to all checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", setting_check);
});

//check tickboxes ticked or not
function setting_check() {
  setting[this.dataset.index] = this.checked ? 1 : 0;
  console.log(setting);
  strength_level_check();
}

//strength bar
const strength_in_word = document.getElementById('strength-level-in-word');
const bar_list = document.getElementsByClassName('bar-list');
const strength_level = [ ['red', 'TOO WEAK'], ['red', 'TOO WEAK'], ['orange', 'WEAK'], ['yellow', 'MEDIUM'],  ['green', 'STRONG']];

//slider value
let slide_value = document.getElementById('range');
let y = document.getElementById('f')
y.innerHTML = slide_value.value;

slide_value.oninput = function() {
    y.innerHTML = this.value
    strength_level_check();
}


function strength_level_check(){
    //first reset all to default white color
    for (let i = 0; i < bar_list.length; i++) {
        bar_list[i].style.borderColor = "white";
        bar_list[i].style.backgroundColor = 'transparent';
    }

    //count the strength level
    setting_count = setting.filter(value => value == 1).length;
    let strengthCount = Math.round(setting_count * 0.5 + slide_value.value * 0.2);
    let MAX_STRENGTH = 4;
    console.log(strengthCount);
    if (strengthCount >= MAX_STRENGTH) {
        strengthCount = MAX_STRENGTH;
    }

    //when i = 0
    bar_list[0].style.borderColor = strength_level[1][0];
    bar_list[0].style.backgroundColor = strength_level[1][0];

    //switch bar color according to strength level
    for (let i = 0; i < strengthCount; i++) {
        bar_list[i].style.borderColor = strength_level[strengthCount][0];
        bar_list[i].style.backgroundColor = strength_level[strengthCount][0];
    }
    strength_in_word.textContent = strength_level[strengthCount][1];
}

function password_generation(){
    let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '/', '?', '|'];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let pool = [];   //2D_pool
    let len = slide_value.value; //length of pw
    let count = [0,0,0,0];//count which group is used in pw
    let output="";//output pw
    
    //push to the 2D_pool
    pool.push(uppercaseLetters);
    pool.push(lowercaseLetters);
    pool.push(symbols);
    pool.push(numbers);
    
    if(setting_count == 0){
        err.innerHTML = "Nothing selected!";
        return 0;
    }
    else if(setting_count > len){
        err.innerHTML = "The lenght of the password is too short";
        return 0;
    }
    else{
        err.innerHTML = "";
    }

    let find_count = 0;
    let index = 0;
    let pool_length = pool[0].length + pool[1].length + pool[2].length + pool[3].length;

    while (len !== 0){
        //generated random number from pool_2
        a=Math.floor((Math.random()*pool_length)); 
        for(let i =0; i < 4;i++){
            if(pool[i].length > a ){ //know the index place
                index = i;
                break;
            }
            a-=pool[i].length; //deduce the one of the length of 2D array, if >= then the random number is located in pool_1[i]
        }
        
        if(len === setting_count - find_count && count[index] !== 0 || setting[index] == 0){
            
        }
        else{
            output+=pool[index][a];
            count[index]++;
            len--;
        }
        find_count = count.filter(value => value > 0).length;
    }
    generated_pw.innerHTML = output;
}


//animation
let isHovering = false;
let intervalId;

generate_button.addEventListener('mousedown', () => {
  isHovering = true;
  intervalId = setInterval(() => {
    password_generation();
  }, 200);
});

generate_button.addEventListener('click', () => {
    isHovering = false;
    clearInterval(intervalId);
});

generate_button.addEventListener('mouseout', () => {
    isHovering = false;
    clearInterval(intervalId);
});


let copy_button = document.getElementById("copy-password");
copy_button.addEventListener('click', () =>{
    const password = generated_pw.textContent;

    navigator.clipboard.writeText(password)
    .then(() => {
        err.innerHTML = "copyed!";
    })
    .catch((err) => {
        err.innerHTML = "error!";
    })
})

