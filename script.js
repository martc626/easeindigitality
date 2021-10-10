const floating = (event, offset) => {
	let mouseX = event.clientX
	let mouseY = event.clientY
	let halfWidth = window.innerWidth / 2
	let halfHeight = window.innerHeight / 2
	let x = mouseX - halfWidth
	let y = mouseY - halfHeight
  	// console.log(x + "," + y)
  	let  transX = x * -1 * offset / halfWidth
  	let  transY = y * -1 * offset / halfHeight
  	// console.log(transX + "," + transY)
  	let coords = [transX,transY]
  	return coords	
}

const touch = (event, offset) => {
  let mouseX = event.touches[0].clientX
  let mouseY = event.touches[0].clientY
  let halfWidth = window.innerWidth / 2
  let halfHeight = window.innerHeight / 2
  let x = mouseX - halfWidth
  let y = mouseY - halfHeight
  // console.log(x + "," + y)
  let  transX = x * -1 * offset / halfWidth
  let  transY = y * -1 * offset / halfHeight
  // console.log(transX + "," + transY)
  let coords = [transX,transY]
  return coords
}

let cloud1 = document.getElementById('cloud-1');
let cloud2 = document.getElementById('cloud-2');
let cloud3 = document.getElementById('cloud-3');

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  cloud1.style.right = value * 1.5 + 'px';
  cloud2.style.left = value * 1.5 + 'px'; 
  cloud3.style.right = value * 1.5 + 'px';  
})