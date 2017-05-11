/**
 * Created by Combii on 27/04/2017.
 */
var check = true;

function changeColor(){
    var divObject1 = document.getElementById("div1");
    var divObject2 = document.getElementById("div2");
    if(check){
        divObject1.className = "red";
        divObject2.className = "blue";
        check = false;
    }
    else{
        divObject1.className = "blue";
        divObject2.className = "red";
        check = true;
    }
}