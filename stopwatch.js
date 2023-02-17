let ms=0,sec=0,min=0,hr=0,startid;

let startbutton = document.getElementById('start');
let resetbutton = document.getElementById('reset');
let stopbutton = document.getElementById('stop');
let msstring = document.getElementById('millisecond');
let secstring = document.getElementById('second');
let minstring = document.getElementById('minute');
let hrstring = document.getElementById('hour');

function stopwatch(){
    ms++;
    if(ms==100){
        ms=0;
        sec++;
        msstring.innerHTML = ms;
    }
    if(sec==60){
        sec=0;
        min++;
        secstring.innerHTML = sec;
    }
    if(min==60){
        min=0;
        hr++;
        minstring.innerHTML = min;
    }
    if(ms<10)
    msstring.innerHTML = '0'+ms;
    else
    msstring.innerHTML = ms;
    if(sec<10)
    secstring.innerHTML = '0'+sec;
    else
    secstring.innerHTML = sec;
    if(min<10)
    minstring.innerHTML = '0'+min;
    else
    minstring.innerHTML = min;
    if(hr<10)
    hrstring.innerHTML = '0'+hr;
    else
    hrstring.innerHTML = hr;
}

function starttimer(){
    clearInterval(startid);
     startid = setInterval(stopwatch,10);
}
function stoptimer(){
    clearInterval(startid);
}
function resettimer(){
    clearInterval(startid);
    ms=0;
    sec=0;
    min=0;
    hr=0;

    msstring.innerHTML = '00';
    secstring.innerHTML = '00';
    minstring.innerHTML = '00';
    hrstring.innerHTML = '00';
}

startbutton.addEventListener('click',starttimer);
stopbutton.addEventListener('click',stoptimer);
resetbutton.addEventListener('click',resettimer);

