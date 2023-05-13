const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const relogin = documnet.querySelector("#re-login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // sumbit시 브라우저에서 실행되는 동작(새로고침) 막아주고
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_CLASSNAME);  // submit event 발생시>> hidden 그래서 form이 아니라 function에 hidden class 추가해주는것
  //<form class="hidden">이거랑 같은건데 조건이 붙는 경우에 이렇게 함수안에 적는거임
  //console.log(username);
  paintGreetings(username);
  
} 

//loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`; //"Hello " + username 과 같은거
  //innterText: 해당 dom 요소의 text를 가져오는데, 대입수정시 해당 요소의 내용이 완전히 대체되므로 기존의 텍스트는 삭제되고 새로운 텍스트로 대체됨
  greeting.classList.remove(HIDDEN_CLASSNAME); //greeting 이 적용된 dom요소에서 hidden class를 삭제하겠다
  
}

//localStorage.getItem: localStorage에 없는 값을 불러오려고 하면 null 반환
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername ===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // login 해야하니까 이거 추가!
}
else{
    //show greeting
    paintGreetings(savedUsername);
}