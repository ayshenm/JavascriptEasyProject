const Minute = document.querySelector("#minute");
const Seconds = document.querySelector("#seconds");


const selectedM = document.querySelector("#selected-minute");
const selectedS = document.querySelector("#selected-second");

const buttonStart = document.querySelector("#start");
const buttonEnd = document.querySelector("#end");

//sifrla
let stop = false;

//deyeri elave etmek
selectedM.addEventListener("click", () =>{
    Minute.textContent = selectedM.value < 10 ? "0" + selectedM.value : selectedM.value;
});

selectedS.addEventListener("click", () =>{
    Seconds.textContent = selectedS.value < 10 ? "0" + selectedS.value : selectedS.value;
});

buttonStart.addEventListener("click", StartTimer);

buttonEnd.addEventListener("click", () =>{
    stop = true;

    //selectedM.value = "0";
    //selectedS.value = "0";

    Minute.textContent = "00";
    Seconds.textContent = "00";
    selectedM.textContent = "00";
    selectedS.textContent = "00"

    
})

function StartTimer(){
    let mn = Minute.textContent;
    let sn = Seconds.textContent;
   
    const interval = setInterval(() =>{
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if(sn == "0-1"){
            mn--;
            mn = mn < 10 ? "0" + mn : mn;
            sn = 59;
        }
        if ((mn == 0 && sn == 0) || (mn == 0 && sn == 0)){
            clearInterval(interval);
            window.alert("time out");
            selectedM.value = "0";
            selectedS.value = "0";
        }
        if(stop){
            clearInterval(interval);
            return;
            
        }
        
        Minute.textContent = mn;
        Seconds.textContent = sn;
        
    },1000);
}