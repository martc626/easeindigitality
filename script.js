let cloud1 = document.getElementById('cloud-1');
let cloud2 = document.getElementById('cloud-2');
let cloud3 = document.getElementById('cloud-3');

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  cloud1.style.right = value * 1.5 + 'px';
  cloud2.style.left = value * 1.5 + 'px'; 
  cloud3.style.right = value * 1.5 + 'px'; 
})