var marquee = document.querySelectorAll('marquee');
for(i=0; i<marquee.length; i++){
	marquee[i].setAttribute('scrollamount', '10');
}
for(x=0; x<marquee.length; x++){
	if(marquee[x].hasAttribute('data-speed')){
		var speed = document.getElementsByTagName('marquee')[x].getAttribute('data-speed');
		document.getElementsByTagName('marquee')[x].setAttribute('scrollamount', speed);
	}
}