const msgButton = document.getElementById("messagebtn");
const msgWindow = document.querySelector("#message-window textarea");

let msgStatus = false;
const BTNSTATE = "2px 2px 4px rgba(0, 0, 0, 0.5)";

function makeMessage(){
    if (msgStatus){
        msgStatus = false;
        msgWindow.classList.add("hidden");
        return;
    }
   msgStatus=true;
   msgWindow.classList.remove("hidden");
}




msgButton.addEventListener("click",makeMessage);
msgButton.addEventListener("mousedown",function(event){event.target.style.boxShadow = `inset ${BTNSTATE}`});
msgButton.addEventListener("mouseup",function(event){event.target.style.boxShadow = BTNSTATE;});
msgButton.addEventListener("mouseover", function(event){event.target.style.boxShadow = "none";});
msgButton.addEventListener("mouseout", function(event){event.target.style.boxShadow = BTNSTATE;});




