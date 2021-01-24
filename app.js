setInterval(checkBackground,200);
function checkBackground(){
    generateRandomColor();
    changeBackgroundColor();
    changeBackgroundText();
}
function generateRandomColor(){
    return'#'+Math.floor(Math.random()*16777215).toString(16);
}
function changeBackgroundColor(){
    let colorBg=document.getElementById('color-overlay');
    colorBg.style.backgroundColor=generateRandomColor();
}
function changeBackgroundText(){
    let textBg=document.getElementById('text-bg');
    if(textBg.innerHTML=='LETS ROCK AND ROLL')
    textBg.innerHTML='ON THE FLOOR BABY';
    else if(textBg.innerHTML=='ON THE FLOOR BABY')
    textBg.innerHTML='HIT IT HARD';
    else if(textBg.innerHTML=='HIT IT HARD')
    textBg.innerHTML='ROCK THE PARTY BABY';
    else if(textBg.innerHTML=='ROCK THE PARTY BABY')
    textBg.innerHTML='LETS ROCK AND ROLL';
}