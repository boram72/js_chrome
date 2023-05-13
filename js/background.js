const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

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

  body {
    background-image: url('img/${chosenImage}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

document.head.appendChild(styleElement);
