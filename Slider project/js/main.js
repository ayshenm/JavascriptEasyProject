const ArrL = document.querySelector(".arrow_left");
const ArrR = document.querySelector(".arrow_right");
const Txt = document.querySelector(".text");

let index = 0;

const text = [
    "If you want to shine like the sun, first burn like the sun",
    "Learn from yesterday, live for today, hope for tomorrow",
    "Wealth is the slave of wise man, the master of a fool"   
]

gsap.from(".text", .8, {y:'-100%'}); 

function slideRight(){
    if(index == 0) index = text.length - 1;
    else index++;
    gsap.to(".image", .3,{x: `${-index * 100}%`})
    Txt.textContent = text[index];

}

function slideLeft(){
    if(index == text.length - 1) index = 0;
    else index--;
    gsap.to(".image", .3,{x: `${-index * 100}%`})
    Txt.textContent = text[index];

}

ArrR.addEventListener("click",slideRight);
ArrL.addEventListener("click",slideLeft);