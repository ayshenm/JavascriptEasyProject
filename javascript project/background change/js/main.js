const Body = document.querySelector("body");
const Button = document.querySelector("button");
const colors = ["yellow","green","blue","purple","black","#85a832","#3c32a8","#3c32a8","#a8a032"];


Button.addEventListener("click",changeBackground);

 let series = 0;

function changeBackground(){
    //random color
    //const randomColors = Math.floor(Math.random() * colors.length);
    //console.log(randomColors);
    //const colorAdd = colors[randomColors];
    //Body.style.backgroundColor = colorAdd;


    //series color
    
    if(series == 8) series = 0
    const colorAdd = colors[series];
    series++;
    Body.style.backgroundColor = colorAdd;
}