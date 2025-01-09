// access to the all button on keyboard
let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let equal=document.getElementById("equal");


//fuction for screen update when clicked on the button
buttons.forEach (btn =>{
btn.addEventListener("click",(a) =>{
const value= a.target.innerText;
// when we click "="then evaluate the exprestion

if(value==="="){
    try{
        screen.value=eval(screen.value);
    }catch(e){
        screen.value="Error";
    }
    }
//    if we click the"c"  button clear the screen valuse
else if(value==="c"){
    screen.value="";
}
// for click the other no then perform the crosponding expretion
else{
    screen.value +=value;
}

})
    
});
// this is used for keyboard input
document.addEventListener("keydown",(a)=>{
   const key=a.key;
//    matchs the input key when it matches to add it 
   if("0123456789+-*/()".includes(key)){
    screen.value += key;
   }
// handle the backpace
else if(key==="Backpace"){
    Screen.value = screen.value.slice(0,-1)
}
// handle the enter ket to evaluate exprestion
else if(key==="Enter"){
    try{
        screen.value=eval(screen.value)
    }
    catch(e){
        screen.value="Error";
    }
}
})


















