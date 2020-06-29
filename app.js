function getNumber (num){

    // console.log(num);
    var display = document.getElementById("display");
    display.value  += num;
    

}

function clearDisplay(num){
    var display = document.getElementById("display");
    display.value = "";
}
 
function result(){
    var display = document.getElementById("display");
   
    display.value = eval(display.value);

}

function BackSpace (num){
    var display = document.getElementById("display");
    display.value -= num;
}