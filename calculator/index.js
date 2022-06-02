// elements

(function (){


let display = document.getElementById("display");
let buttons = document.querySelectorAll(".buttons .button");
let clearBtn = document.getElementById("clearBtn");
let equal = document.getElementById("equal");

buttons.forEach(function (button){
    button.addEventListener("click",function(e){
        console.log(e.target.dataset.num)
        let value = e.target.dataset.num;
        display.value += value;
    });
});
equal.addEventListener("click",function (){
    if(display.value == ""){
        display.value = "please set your mathemical operation";
        display.value.style.color = "red";
    }else{
        let answer = eval(display.value);
        display.value = answer;
    }
    
})
clearBtn.addEventListener("click",function(){
    display.value = "";
})
})();



