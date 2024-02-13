const subHaNaAllahDisplay=document.getElementById('subHaNaAllahDisplay');
const firstElementChild=document.querySelector('section').firstElementChild;
const subHaNaAllahMinus=document.getElementById('subHaNaAllahMinus')

let subHaNaAllahValue=0;


function  subHaNaAllahPlus(){
    if(subHaNaAllahValue===33){
        return alert('Complect')
    }

firstElementChild.style.background='pink'
subHaNaAllahDisplay.style.background='blue'
subHaNaAllahValue++
subHaNaAllahDisplay.innerText=subHaNaAllahValue;
}

document.getElementById('subHaNaAllahMinus').addEventListener('click',function(){


if(subHaNaAllahValue===0){
    return alert(`Invalid`)
}

    subHaNaAllahValue--
    firstElementChild.style.background='red'
    subHaNaAllahDisplay.style.background='white'
    subHaNaAllahDisplay.style.color='black'
    subHaNaAllahDisplay.innerText=subHaNaAllahValue;

})


// ٱلْحَمْدُ لِلَّٰهِ


const alhadulilahMinus=document.getElementById('alhadulilahMinus');
const alhadulilah=document.getElementById('alhadulilah');
const alhadulilahDisplay=document.getElementById('alhadulilahDisplay');
let alhamdulilahValue=0;


alhadulilah.addEventListener('click',()=>{

    if(alhamdulilahValue===33){
        return alert('Complect')
    }

   const firstChildD=document.querySelector('section').firstElementChild;
    const firstChildD2=firstChildD.nextElementSibling;
    firstChildD2.style.background='yellow'
    alhadulilahDisplay.style.background='blue'
    alhamdulilahValue++;
    alhadulilahDisplay.innerText=alhamdulilahValue;
});

alhadulilahMinus.onclick=()=>{

if(alhamdulilahValue===0){
    return alert('Invalid')
}

    alhamdulilahValue--;
    document.querySelector('section').firstElementChild.nextElementSibling.style.background='green';
    alhadulilahDisplay.style.background='white';
    alhadulilahDisplay.style.color='black';
    alhadulilahDisplay.innerText=alhamdulilahValue;

}


// allahHuAkbar;


const AllahHuAkbarDisplay=document.getElementById('AllahHuAkbarDisplay');
let allahHuAkbarValue=0;


function AllahHuAkbar(){

if(allahHuAkbarValue===33){
    return alert('Complect');
}

    allahHuAkbarValue++;
document.querySelector('section').firstElementChild.nextElementSibling.nextElementSibling.style.background='black'
document.getElementById('minus').style.color='white';
AllahHuAkbarDisplay.style.background='blue';
AllahHuAkbarDisplay.innerText=allahHuAkbarValue;

}



function AllahHuAkbarMinus(){

if(allahHuAkbarValue===0){
    return alert('Invalid');
}

    allahHuAkbarValue--
    document.querySelector('section').firstElementChild.nextElementSibling.nextElementSibling.style.background='gray'
    AllahHuAkbarDisplay.style.background='white';
    AllahHuAkbarDisplay.style.color='black';
    AllahHuAkbarDisplay.innerText=allahHuAkbarValue;
}



// reset 

document.getElementById('reset').onclick=reset;

function reset(){

    AllahHuAkbarDisplay.innerText=0;
    alhadulilahDisplay.innerText=0;
    subHaNaAllahDisplay.innerText=0;

    allahHuAkbarValue=0;
    alhamdulilahValue=0;
    subHaNaAllahValue=0;

    const resetColors=document.getElementsByClassName('resetColor');
    for(const resetColor of resetColors ){
        resetColor.style.background='red'
    }

}