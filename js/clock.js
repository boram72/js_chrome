const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); //new 키워드를 사용하여 객체를 생성할 때, 생성자 함수는 해당 객체를 초기화
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    //const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText=`${hours}:${minutes}`;
}

//string.padStart(2,"0") : string의 길이를 2로 만드는데, 2가 아니라면 앞에 0을 채운다
//string.padEnd(2,"0") : 뒤를 0으로 채운다

getClock()
setInterval(getClock,1000); // (interval : 몇시간 간격으로 계속 일어나야 하는 것 (function,milli seconds)

//setTimeout(sayHello,5000); // 얘는 얼마나 기다렸다가 함수를 실행할지  

// const clockstyle = document.createElement("style");

// clockstyle.textContent = `
// #clock{
//     font-size: 120px;
//     text-align: center;
//     margin-top:170px;
//     margin-bottom: 0px;
//     padding: 0px;
//     font-family: cursive;
//     text-shadow: 5px 3px 7px #000000;
//     /*-webkit-text-stroke: 1px #000000;*/
//     color: white; 
//     opacity:0.7;/*투명도 조절*/
// }`

// //console.log(clockstyle)
// document.head.appendChild(clockstyle);