
const x = document.getElementById("input");

function appendToDisplay(input){
    x.value += input;
}

function Solve(){
    try{
        x.value = eval(x.value);
    }
    catch(error){
        x.value="Math Error";
    }
}

function Reset(){
    x.value = "";
}