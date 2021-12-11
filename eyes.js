const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 50) / window.innerWidth + '%';
  const y = (event.clientY * 50) / window.innerHeight + '%';

  for(var i=0;i<2;i++){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
}
};
