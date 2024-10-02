const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");




let password="";
let passLength=10;
let checkCount=0;

handleSlider();
setIndictor("#ccc");

function handleSlider(){
    inputSlider.value=passLength;
    lengthDisplay.innerText=passLength;
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passLength-min)*100)/(max-min)+"$ 100%";
}

function setIndictor(color){
    indicator.style.backgroundColor=color;
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;
}
//Generate RandomInt
function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
//Generate RandomNo
function generateRandomNo(){
    return getRandomInt(0,9);
}
//Generate Uppercase
function generateUpperCase(){
    return String.fromCharCode(getRandomInt(65,91));
}

//Generate Lowercase
function generateLowerCase(){
    return String.fromCharCode(getRandomInt(97,123));
}
//Generate Symbol
function generateSymbol(){
    const randNum=getRandomInt(0,symbols.length);
    return symbols.charAt(randNum);
}
//calculate String
function calcStringh(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;
    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numbersCheck.checked) hasNum=true;
    if(symbolsCheck.checked) hasSym=true;
    if(hasUpper&&hasLower&&(hasNum||hasSym)&&passLength>=8){
        setIndictor("#0ff0");
    }else if((hasLower||hasUpper)&&(hasNum||hasSym)&&passLength>=6){
        setIndictor("#f00");
    }else{
        setIndictor("#f00");
    }
}