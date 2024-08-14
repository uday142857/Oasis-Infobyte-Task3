var bUt=document.getElementById("bt");
var paRa=document.getElementById("pa");
var bt=document.getElementById("bt2")
function conVert(){
    var inPut=document.getElementById("input").value;
    var selEct=document.getElementById("cho").value;
    if(selEct=="cel"){
        var res=inPut*9/5+32;
        paRa.innerText=res + "F°"
    }
    else if (selEct=="cekel"){
        var res=parseFloat(inPut)+273.15
        paRa.innerText=res+"k"
   }
    else if (selEct=="kelce"){
        var res=parseFloat(inPut)-273.15+"c"
        paRa.innerText=res+"c°"
   }
   else if (selEct=="fahkel"){
    var res=(parseFloat(inPut)-32)*5/9 + 273.15
    paRa.innerText=res+"k°"
    }
    else if (selEct=="kelfah"){
        var res=(parseFloat(inPut)-273.15)*9/5 + 32
        paRa.innerText=res+"f°"
        }
    else{
        var res=(inPut-32)*5/9;
        paRa.innerText=res+"c°"
    }
    // document.getElementById("input").value="";
}
function clearAll(){
    var paRa=document.getElementById("pa");
    var inPut=document.getElementById("input");
    inPut.value="";
    paRa.innerText="";

}