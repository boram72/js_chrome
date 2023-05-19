const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img"); //<img> tag 만들
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage); // body에 child로 추가하겠다.

const styleElement = document.createElement("style");
styleElement.textContent = `

  html{
    height: 100%; /* 부모 요소의 크기를 화면 전체로 설정 */
    margin: 0; /* 기본 마진 제거 */
    padding: 0; /* 기본 패딩 제거 */
  }

  .container::after {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('img/${chosenImage}');
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center center;
    opacity:0.7;
    z-index: -1;
  }

`;
/*top,left: position: absolute 일때 시작점*/

document.head.appendChild(styleElement);



