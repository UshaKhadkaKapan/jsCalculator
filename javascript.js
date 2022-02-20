const button= document.querySelectorAll("button");
const displayElm =document.querySelector("#result");
let textToDisplay=""
const symbols=["+","-","*","/"];

button.forEach((btn)=>{
btn.addEventListener("click",()=>{

    const val=btn.innerText;
    const lsatChar=textToDisplay[textToDisplay.length-1];

    // if .exist, dot let user to enter another
if(val==="." && textToDisplay.includes("."))return;




    if(textToDisplay.length<1 && symbols.includes(val))return;



    // if the operates already exist then replac it with new one
    if(symbols.includes(lsatChar) && symbols.includes(val)){
        // remove the last symbols from the strring
        textToDisplay=textToDisplay.slice(0,-1);

        // add the incoming operatoir

    }
   


    if(val==="AC"){
        return resetDisplay();
    }

    if(val==="="){

        const lsatChar=textToDisplay[textToDisplay.length-1];
        if(symbols.includes(lsatChar)){
        textToDisplay=textToDisplay.slice(0,-1);

        }

        return onTotal();

    }

    // cut the last value of cal
    if (val==="C"){
        textToDisplay=textToDisplay.slice(0,-1);
        return display(textToDisplay);
    }

    textToDisplay += val;
   
    display(textToDisplay);
});
});

const display=(toDisplay)=>{
    displayElm.innerText=toDisplay || "0.00";   
}


const onTotal=()=>{
const prankNum=randomNumber();
    const total=eval(textToDisplay) + prankNum;


    display(total);
    textToDisplay="";
}


const resetDisplay=()=>{
    
    display(0.00);
    textToDisplay="";
};

const randomNumber=()=>{
    const num=Math.round(Math.random()*10);
    return num <=3 ? num:0
}