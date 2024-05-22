// for selecting elementi by id- .getelementById('id name')
let input= document.getElementById('inputBox');

// selects or returns specified set of css selector here it is button so it will retuen a list of all buttons
let buttons= document.querySelectorAll('button');

let string = "";

// makes an array of all buttons and stores it into the arr variable
let arr= Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string= eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string= "";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})