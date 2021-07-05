let userName;
let t=0;//t is loop1 times
let c=1;
function logName(){
  console.log("logName")
 userName=document.getElementById('name').value;
  console.log("the user's name is "+userName);
  document.getElementById('thanks').innerHTML="Thank you, "+userName;
  welcome();
 }

function welcome(){
 let welcome=document.createElement("p");
 welcome.innerHTML="welcome "+userName;
 welcome.style.color="#f22e94"
 let start=document.createElement("p");
 start.innerHTML="click here to start";
 start.classList.add("click")
 start.addEventListener("click",scene0);

//hide the bar
if (userName!=""){
  //let start=document.createElement("button");
  console.log(1)
  document.getElementById('opening').appendChild(welcome);
  document.getElementById('opening').appendChild(start);
  document.getElementById('div-name').style.display="none";
 }
}


/*function myfu(){document.getElementById('threat').src="images/blood.png"
};
document.getElementById('threat').addEventListener("click", myfu );*/


let randomDialogue=[
  "I had a strange dream last night", "today is February 16...", "It's Saturday!","I Can't wait for the fireworks tonight!","?","I hope I can make a difference this time...", "It's Saturday!","today is February 16...","will be a nice day!","I had a strange dream last night"];
function dialogue(){
let n= parseInt(Math.random()*10);
console.log('n='+n);
document.getElementById('randomDialogue').innerHTML=randomDialogue[n];
}



function scene0(){
  document.getElementById('opening').style.display="none";
  document.getElementById('scene0').style.display="block";
  document.body.style.background="white";
  //document.getElementById('hiuser').innerHTML="hi "+userName;
}
function scene0to1(){
  document.getElementById('scene0').style.display="none";
  document.getElementById('scene1').style.display="block";
  document.body.style.background="lightblue";
}
scene2.addEventListener("click",scene2to4);
function scene1to2(){
  document.body.style.background="orange";
  document.getElementById('scene1').style.display="none";
  document.getElementById('scene2').style.display="block";
  t++;

console.log("t is "+t);
if (t>=2){
  console.log("remove button to4 and add button to5");
  scene2=document.getElementById("scene2");
  scene2.removeEventListener("click",scene2to4);
  scene2.addEventListener("click",scene2to5);
 
}
}
function scene1to3(){
  document.body.style.background="black";
  document.getElementById('scene1').style.display="none";
  document.getElementById('scene3').style.display="block";
}
function scene2to4(){
  document.body.style.background="orange";
  document.getElementById('scene2').style.display="none";
  document.getElementById('scene4').style.display="block";
}
function scene3to4(){
  document.body.style.background="orange";
  document.getElementById('scene3').style.display="none";
  document.getElementById('scene4').style.display="block";
}
function scene4to0(){
  c++;
  if(c==2){
  var element = document.getElementById("instruction");
  element.parentNode.removeChild(element);
  }
  dialogue();
  document.body.style.background="white";
  document.getElementById('scene4').style.display="none";
  document.getElementById('scene0').style.display="block";

}
function scene2to5(){
  document.body.style.background="black";
  document.getElementById('scene2').style.display="none";
  document.getElementById('scene5').style.display="block";
}
function scene5to6(){
  document.body.style.background="orange";
  document.getElementById('scene5').style.display="none";
  document.getElementById('scene6').style.display="block";
}
function scene5to7(){
  document.body.style.background="orange";
  document.getElementById('scene5').style.display="none";
  document.getElementById('scene7').style.display="block";
}
function scene5to8(){
  document.body.style.background="orange";
  document.getElementById('scene5').style.display="none";
  document.getElementById('scene8').style.display="block";
}
function scene7to10(){
  document.body.style.background="black";
  document.getElementById('scene7').style.display="none";
  document.getElementById('scene10').style.display="block";
}
function scene8to10(){
  document.body.style.background="black";
  document.getElementById('scene8').style.display="none";
  document.getElementById('scene10').style.display="block";
}
function scene6to9(){
  
  document.body.style.background="black";
  document.getElementById('scene6').style.display="none";
  document.getElementById('scene9').style.display="block";
}
function scene10to0(){
  
  dialogue();
  document.body.style.background="white";
  document.getElementById('scene10').style.display="none";
  document.getElementById('scene0').style.display="block";
}
//more plots below
/*function scene9to10(){
  document.getElementById('scene9').style.display="none";
  document.getElementById('scene10').style.display="block";
}
function scene9to11(){
  document.getElementById('scene9').style.display="none";
  document.getElementById('scene10').style.display="block";
}
function scene6to12(){
  document.getElementById('scene6').style.display="none";
  document.getElementById('scene12').style.display="block";
}
function scene12to1(){
  document.getElementById('scene12').style.display="none";
  document.getElementById('scene1').style.display="block";
}
/*function scene8to1(){
  document.getElementById('scene8').style.display="none";
  document.getElementById('scene1').style.display="block";
}*/

//scene1

let i=1;
function scene1p2() {
  document.getElementById('scene1p'+i).style.display="none";
  i++
  if (i<4) {
    i=i;

  }else {
    i=1;
  }
  console.log("i="+i);
  document.getElementById('scene1p'+i).style.display="block";
}
//scene4
let j=1;
function scene4p2() {
  console.log("j");
  document.getElementById('scene4p'+j).style.display="none";

  j++
  if (j<3) {
    j=j;

  }else {
    j=1;
  }
  console.log("j="+j);
  document.getElementById('scene4p'+j).style.display="block";
}
//let scene6p1=document.getElementById("help");
//scene6p1.addEventListener.("click", scene6p2);error;

//scene6;
let h=1;
function scene6p2() {
  document.getElementById('scene6p1').style.display="none";
  scene6p2=document.getElementById('scene6p2');
  scene6p2.style.display="block";
  scene6p2.addEventListener('click',scene6to9);
}

let fireworkPlay=document.getElementById("scene9")
while( fireworkPlay.style.display==="block"){ swapImage()
}

let fireworks=["images/scene9p1.png","images/scene9p2.png","images/scene9p3.png","images/scene9p4.png","images/scene9p6.png"];
let interval = setInterval(swapImage, 500);
let imgIndex = 0;

function swapImage() {
  let img = document.getElementById('fireworksEffect');
  img.src = fireworks[imgIndex];

  imgIndex++;
  if (imgIndex == 5) {
    imgIndex = 0;
  }
}
console.log("c is "+c);