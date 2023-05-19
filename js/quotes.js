const quotes=[
    "To be happy, we must not be too concerned with others.",
    "Don't dwell on the past",
    "Seize the day.",
    "Don't beat yourself up",
    "The die is cast",
    "When they go low, we go high",
    "Be brave",
    "I don't want a perfect life, i want a happy one.",
    "He can do, she can do, why not me?",
    "It is not length of life, But depth of life."
];


const quote = document.querySelector('#quote button');
//const memobtn = document.querySelector('#memobtn');
const memogroup = document.querySelector('#memo');
const memopad = document.querySelector('#memo textarea');
const memowrite = document.querySelector('#savememo');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote;

const HIDDEN = "hidden";
const ACTIVE = "active";
const SHOW = "show";
const HIDE = "hide";

//메모키 
const MEMO_KEY = "memokey"
let savedMemo = localStorage.getItem(MEMO_KEY);
    

const buttonX = document.createElement("button");
const buttonChk = document.createElement("button");
buttonX.innerText = "✖";
memogroup.appendChild(buttonX);
memogroup.appendChild(buttonChk);

buttonX.classList.add(HIDDEN);  
buttonChk.classList.add(HIDDEN);


function makememo(initmemo){
                    

    memopad.value = initmemo;

    memopad.addEventListener("focus",function(){
        memopad.classList.add(ACTIVE);
        buttonX.classList.add(ACTIVE);
        buttonChk.classList.add(ACTIVE);
    });
    memopad.addEventListener('blur', function(){
        memopad.classList.remove(ACTIVE);
        buttonX.classList.remove(ACTIVE);
        buttonChk.classList.remove(ACTIVE);
    });//focus
}


function hidememo(){
    buttonX.classList.add(HIDDEN);
    buttonChk.classList.add(HIDDEN);
    memopad.classList.remove(SHOW);

    setTimeout(function() {
        memopad.classList.add(HIDE);

        setTimeout(function() {
            memopad.classList.add(HIDDEN);
          }, 450); 

    }, 10);
}


const BTNORIGINSTATE="2px 2px 4px rgba(0, 0, 0, 0.5)";
function quotebtn(){
    
    buttonChk.innerText = "✔";
    quote.addEventListener("mouseover",function(event){event.target.style.boxShadow = `inset ${BTNORIGINSTATE}`;});
    quote.addEventListener("mouseout",function(event){event.target.style.boxShadow = "none";});
    quote.addEventListener("click",function(){

        if(memopad.classList.contains(HIDDEN)){
            if(memopad.classList.contains(HIDE)){
                memopad.classList.remove(HIDE);
            }
            
            setTimeout(function() {
                memopad.classList.add(SHOW);
                setTimeout(function() {
                    memopad.classList.remove(HIDDEN);
                    buttonX.classList.remove(HIDDEN);
                    buttonChk.classList.remove(HIDDEN);
                }, 450); 
            }, 10);
                    
            makememo("");
        }
        else{        
            hidememo();
            
        }
    });
}


quotebtn();

if(savedMemo!=null){
    if(buttonChk.classList.contains(HIDDEN)){
        buttonChk.classList.remove(HIDDEN);
        buttonX.classList.remove(HIDDEN);
    }
    loadMemo(savedMemo);
}



// 여기서부터는 메모기능 구현할거임





function clearMemo(event){
    savedMemo = localStorage.getItem(MEMO_KEY);
    if (!buttonX.classList.contains('ACTIVE')){
        buttonX.classList.add(ACTIVE);
        memopad.classList.add (ACTIVE);
    }
    
    if(savedMemo === null){ // 메모가 원래 없었으면 
        memopad.value = "";
    }

    else{
        memowrite.innerText="";
        buttonX.classList.add(HIDDEN);
        buttonChk.classList.add(HIDDEN);
        localStorage.removeItem(MEMO_KEY);
        buttonChk.innerText = "✔";
    }

    // const siblingElements = Array.from(event.target.parentElement.children); // 형제요소를 다 찾음 [textarea,button,button]
    // siblingElements[0].value=""; // sibling 안해도됨...  memopad.value = "" 이르케 하면됨.....;;;;
 
    
}

function saveMemo(){
    savedMemo = localStorage.getItem(MEMO_KEY);
    if(savedMemo === null){
        const WRITE_MEMO = memopad.value;
    
        localStorage.setItem(MEMO_KEY,WRITE_MEMO);
        loadMemo(WRITE_MEMO);
    }

    else{
        initmemo =savedMemo;
        localStorage.removeItem(MEMO_KEY);
        memowrite.innerText="";

        buttonChk.innerText = "✔";
        if(memopad.classList.contains(SHOW)){
            memopad.classList.remove(SHOW)
        }
        memopad.classList.remove(HIDDEN);
        makememo(initmemo);
        
    }

}


function loadMemo(memotxt){
    buttonChk.innerText = "ººº";

    if(!memopad.classList.contains(HIDDEN)){
        memopad.classList.add(HIDDEN);
    }

    if(!buttonChk.classList.contains(ACTIVE)){
        buttonX.classList.add(ACTIVE);
        buttonChk.classList.add (ACTIVE);
    }

    memowrite.innerText = memotxt;

}


buttonX.addEventListener("click",clearMemo);
buttonChk.addEventListener("click",saveMemo); 
