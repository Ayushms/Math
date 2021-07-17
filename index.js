"USE STRICT";
function option1(){
document.querySelector("#opt").textContent="+";
}
function option2(){
document.querySelector("#opt").textContent="-";
}
function option3(){
document.querySelector("#opt").textContent="*";
}
function option4(){
document.querySelector("#opt").textContent="/";
}
function display() {
  let opt=document.getElementById("opt").textContent;
  console.log(opt);
  if(!opt){
    alert("Please select any operator");
  }
  if(opt){
  let ran1 = Math.trunc(Math.random() * 100);
  let ran2 = Math.trunc(Math.random() * 100);
  let ra1=String(ran1);
  let ra2=String(ran2);
  
    document.querySelector(".show1").textContent =ra1+"  "+opt+ra2;
 // document.querySelector(".show2").textContent = ran2; 
 let sw=document.getElementById("opt").textContent; 
 switch (sw) {
   case "+": result=ran1+ran2;
     
     break;
     case "-": result=ran1-ran2;
      break;
      case "*":result=ran1*ran2;
      break;
      case "/":result=ran1/ran2;
      result=Math.trunc(result);
   default:
     break;
 }

  document.querySelector("#result").textContent = result;
}}

function show() {
  let result = document.getElementById("result").textContent;
  console.log(result);
  let check = document.getElementById("check").value;
  console.log(check);
  if(!check){
    alert("YOU HAVE NOT GIVEN ANY INPUT");
  }
  if(check){
  if (check == result) {
    document.querySelector(".message").textContent = "WOW SUPERB CORRECT ANSWER :) ";
  } else document.querySelector(".message").textContent = `NOOOOO! YOU FAILED, THE ANSWER WAS ${result}  `;
}}
function another(){
  document.querySelector(".message").textContent ="";
   document.querySelector(".show1").textContent ="";
   document.querySelector("#check").value="";
  
}
  
