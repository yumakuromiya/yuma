  /* 文字を浮き上がらせる */
const heading = document.querySelector('#heading');

const keyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};
const options = {
  duration: 2000,
  easing: 'ease',
};

//heading.animate(keyframes, 2000);
heading.animate(keyframes, options); 

/* 終わり */




