const Body = document.querySelector("body");
const Button = document.querySelector("button");
const colors = ["yellow","green","blue","purple","black"];


Button.addEventListener("click",changeBackground);

function changeBackground(){
    console.log("tikadim");
    const colorAdd = colors[3];
    Body.style.backgroundColor = colorAdd;
}