const output=document.getElementById("outputvalue");
function display(number){
    output.value += number;
}
function Clear(){
    output.value="";  
}
function del(){
    output.value=output.value.slice(0,-1)
}
function calculate(){
   try{ output.value=  eval(  output.value);
}
catch(err){
    alert( "Only numbers are allowed");
}

}
