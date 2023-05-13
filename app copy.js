// 웹 브라우저에서 실행되는 JavaScript 코드는 document 객체를 사용하여 현재 로드된 HTML 문서의 구조와 내용에 접근하고 조작
//const loginForm = document.querySelector("#login-form"); 
//querySelector: class, tag, id 다 검색 가능 그러므로 얘가 id인지 class인지 명시해줘야함 (그래서 #붙인거)
//const loginForm = document.getElementById("login-form"); 
//getElementById: 이건 id 찾고있다고 함수 이름부터 나와있으니까 그냥 id 이름만 붙여주면됨

//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
// loginForm 이 갖는 Element: 2개(input, button) 그러므로 여기서 검색가능함(document를 다 뒤질 필요가 없음)

//querySelector는 모든 요소 검색가능하기때문에 아래와 같이 한줄 작성 가능 단, document에서 찾아야함(id 집합을 미리 찾아두지 않았음)
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    //console.dir(loginInput) //console.dir은 주로 개발자 도구의 콘솔 패널에서 객체의 내부 구조를 살펴볼 때 사용
    //console.log(typeof loginInput.value)
    const username = loginInput.value;
    //console.log(username.length)
    // if(username===''){
    //     //console.log('please write your name')
    //     alert('please write your name')
    // }
    // else if(username.length>15) {
    //     alert('your name is too long')
    // }
    // if/else 등의 기능을 브라우저 기능으로 대체(input reqeuired maxlength 같이)
}
loginButton.addEventListener("click",onLoginBtnClick) 
//element.addEventListener(event, handlerFunction); 
//element: 이벤트를 등록할 요소입니다.
//event: 등록할 이벤트의 종류를 나타내는 문자열입니다. 예를 들어, "click", "keydown", "submit" 등의 이벤트 이름을 사용할 수 있습니다.
//handlerFunction: 이벤트가 발생했을 때 실행되는 함수(이벤트 핸들러)입니다.