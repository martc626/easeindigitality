var cloud1 = document.getElementById('cloud-1');
var cloud2 = document.getElementById('cloud-2');
var cloud3 = document.getElementById('cloud-3');

window.addEventListener('scroll', function (){
  var value = window.scrollY;

  cloud1.style.right = value * 1.5 + 'px';
  cloud2.style.left = value * 1.5 + 'px'; 
  cloud3.style.right = value * 1.5 + 'px'; 
})


var moon = document.getElementById('moon');

moon.addEventListener('click', function (){
	var aboutMe = document.querySelector('.about-me');
	  if (aboutMe.style.display === 'none') {
	    aboutMe.style.display = 'block';
	  } else {
	    aboutMe.style.display = 'none';
	  }
})	


var rat = document.querySelector('.rat');

rat.addEventListener('click', function (){

	var ratWeb = document.querySelector('.rat-web');
	var ratLink = document.querySelector('.rat-link');
	var ratDesc = document.querySelector('.rat-desc');
	var ratCount = document.querySelector('.rat-count');

	  if (ratWeb.style.display === 'none') {
	    ratWeb.style.display = 'block';
	    ratLink.style.display = 'block';
	    ratDesc.style.display = 'block';
	    ratCount.style.display = 'block';
	    rat.classList.add('rat-animation');
	  } else {
	    ratWeb.style.display = 'none';
	    ratLink.style.display = 'none';
	    ratDesc.style.display = 'none';
	    ratCount.style.display = 'none';
	    rat.classList.remove('rat-animation');
	  }
})	

var smiley = document.querySelector('.smiley');

smiley.addEventListener('click', function (){

	var smileyWeb = document.querySelector('.smiley-web');
	var smileyLink = document.querySelector('.smiley-link');
	var smileyDesc = document.querySelector('.smiley-desc');

	  if (smileyWeb.style.display === 'none') {
	    smileyWeb.style.display = 'block';
	    smileyLink.style.display = 'block';
	    smileyDesc.style.display = 'block';
	    smiley.classList.add('smiley-animation');
	  } else {
	    smileyWeb.style.display = 'none';
	    smileyLink.style.display = 'none';
	    smileyDesc.style.display = 'none';
	    smiley.classList.remove('smiley-animation');
	  }
})

var cloud = document.querySelector('.cloud');

cloud.addEventListener('click', function (){

	var cloudWeb = document.querySelector('.cloud-web');
	var cloudLink = document.querySelector('.cloud-link');
	var cloudDesc = document.querySelector('.cloud-desc');

	  if (cloudWeb.style.display === 'none') {
	    cloudWeb.style.display = 'block';
	    cloudLink.style.display = 'block';
	    cloudDesc.style.display = 'block';
	    cloud.classList.add('cloud-animation');
	  } else {
	    cloudWeb.style.display = 'none';
	    cloudLink.style.display = 'none';
	    cloudDesc.style.display = 'none';
	    cloud.classList.remove('cloud-animation');
	  }
})

var wikibook = document.querySelector('.wikibook');

wikibook.addEventListener('click', function (){

	var wikibookContainer = document.querySelector('.wikibook-container');
	var wikibookDesc = document.querySelector('.wikibook-desc');

	  if (wikibookContainer.style.display === 'none') {
	    wikibookContainer.style.display = 'block';
	    wikibookDesc.style.display = 'block';
	    wikibook.classList.add('wikibook-animation');
	  } else {
	    wikibookContainer.style.display = 'none';
	    wikibookDesc.style.display = 'none';
	    wikibook.classList.remove('wikibook-animation');
	  }
})

var kumquat = document.querySelector('.kumquat');

kumquat.addEventListener('click', function (){

	var kumquatContainer = document.querySelector('.kumquat-container');
	var kumquatDesc = document.querySelector('.kumquat-desc');

	  if (kumquatContainer.style.display === 'none') {
	    kumquatContainer.style.display = 'block';
	    kumquatDesc.style.display = 'block';
	    kumquat.classList.add('kumquat-animation');
	  } else {
	    kumquatContainer.style.display = 'none';
	    kumquatDesc.style.display = 'none';
	    kumquat.classList.remove('kumquat-animation');
	  }
})

var album = document.querySelector('.album');

album.addEventListener('click', function (){

	var albumContainer = document.querySelector('.album-container');
	var albumDesc = document.querySelector('.album-desc');

	  if (albumContainer.style.display === 'none') {
	    albumContainer.style.display = 'block';
	    albumDesc.style.display = 'block';
	    album.classList.add('album-animation');
	  } else {
	    albumContainer.style.display = 'none';
	    albumDesc.style.display = 'none';
	    album.classList.remove('album-animation');
	  }
})

var covid = document.querySelector('.covid');

covid.addEventListener('click', function (){

	var covidContainer = document.querySelector('.covid-container');
	var covidDesc = document.querySelector('.covid-desc');

	  if (covidContainer.style.display === 'none') {
	    covidContainer.style.display = 'block';
	    covidDesc.style.display = 'block';
	    covid.classList.add('covid-animation');
	  } else {
	    covidContainer.style.display = 'none';
	    covidDesc.style.display = 'none';
	    covid.classList.remove('covid-animation');
	  }
})

var lock = document.querySelector('.lock');

lock.addEventListener('click', function (){

	var lockContainer = document.querySelector('.lock-container');
	var lockDesc = document.querySelector('.lock-desc');

	  if (lockContainer.style.display === 'none') {
	    lockContainer.style.display = 'block';
	    lockDesc.style.display = 'block';
	    lock.classList.add('lock-animation');
	  } else {
	    lockContainer.style.display = 'none';
	    lockDesc.style.display = 'none';
	    lock.classList.remove('lock-animation');
	  }
})

