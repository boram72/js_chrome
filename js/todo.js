const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list"); // <ul> 요소 선택

const TODOS_KEY = "todos"
//const todos=[]; // const 는 초기값에 재할당 불가, 이상태로 원소 추가할당은 가능하나, todo = [new array]로 다시 선언할라하면 에러!
let todos=[];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos)); // json.stringify: js 객체나 값들을 JSON 문자열로 변환, local storage: string만 저장가능>> 저장할때 사용
    //localStorage.setItem("todos",todos);
    //console.log(JSON.parse(localStorage.getItem(TODOS_KEY))); //json.parse: JSON 문자열>> JavaScript 객체나 값으로 변환. JSON.stringify() 메서드와 반대의 기능

}




function delTodoList(event){
    // event.target: button
    // event.target.parentElement: li
    //console.dir(event.target.parentElement)
    // 다양한 방법으로 DOM에 접근할 수 있습니다. : 이벤트 핸들러를 통한 접근: 이벤트 핸들러를 등록하여 이벤트가 발생한 요소를 통해 접근할 수 있습니다. 
    // 이벤트 핸들러의 event.target 속성을 통해 이벤트가 발생한 요소에 접근
    // event.target을 사용하면 이벤트가 발생한 요소에 접근할 수 있습니다. 이벤트 핸들러 내에서 event.target은 해당 이벤트가 발생한 요소를 참조합니다.
    // event.target.parentElement를 사용하면 이벤트가 발생한 요소의 부모 요소에 접근할 수 있습니다. 
    // event.target.parentElement를 통해 이벤트가 발생한 요소의 부모 요소에 접근할 수 있으며, 이를 활용하여 DOM을 조작하거나 변경할 수 있습니다. 
    
    const li = event.target.parentElement;
    
    todos = todos.filter((value) => value.id != parseInt(li.id)); // li.id와 valud.id 의 type이 다름 그래서 value.id !==li.id 이렇게 비교하면 비교연산 안됨 
    li.remove(); 
    saveTodos(); // 지운후에 업데이트해서 localstorage에 다시 저장해줘야 반영됨 
 
    // 이러면 버튼이 사라짐
    // const button = event.target;
    // button.remove();


    // 이러면 형제 삭제 (span이 삭제) >> 나중에 버튼눌러서 내용물 다 삭제할때 쓰면 좋을듯!! 
    // const targetElement = event.target;
    // const parentElement = targetElement.parentElement;
    // const siblingElements = Array.from(parentElement.children); // 형제요소를 다 찾음 [span,button]
    
    
    // // const indexToDelete = siblingElements.findIndex(element => element === targetElement); // indexToDelete: 1 
    // // if (indexToDelete !== -1) {
    // //   siblingElements.splice(indexToDelete, 1); //indexToDelete 위치의 원소 1개만 삭제 >> sibling Elements = [span] 만 남음
    // // }
  
    // // siblingElements.forEach(element => {element.remove();}); //siblingElement 돌면서 해당 element들 다삭제

    // siblingElements.forEach(element => {
    //     if (element !== targetElement) {
    //       element.remove();
    //     }
    //   });
    
}

  

function paintToDo(newtodoObj){
    
    const liElement = document.createElement("li");
    liElement.id = newtodoObj.id;

    const span = document.createElement("span");
    span.innerText = newtodoObj.text;
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",delTodoList)

    liElement.appendChild(span);
    liElement.appendChild(button);
   
    todoList.appendChild(liElement); 

}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newtodoObj={
        text:newTodo,
        id: Date.now()
    };
    todos.push(newtodoObj);
    paintToDo(newtodoObj);
    saveTodos();
}



todoForm.addEventListener("submit",handleTodoSubmit);


function sayhello(item){
    console.log(item);
}



const savetodo = localStorage.getItem(TODOS_KEY);
if(savetodo !== null){
    const parsedTodos = JSON.parse(savetodo); //localstorage 에 저장되어있던 string >> array
    todos = parsedTodos; // localstorage 에 저장되어있던 값을 todo 배열로 그대로 불러온다
    parsedTodos.forEach(item => paintToDo(item)); // localstorage에 저장되어있는 배열의 원소수만큼 hello가 뜸 >> 지금 입력이 바로 반영되는게 아니라 기존에 입력되어있던게 새로고침하면 반영!

}

//document.head.appendChild(styleElement);