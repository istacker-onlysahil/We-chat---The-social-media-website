// demobox javascript 
function demoboxOn() {
	document.getElementById("demo-box").style.display='block';
	document.getElementById("demo").style.color="#2196f3";
	pagesboxOff();
	accountboxOff();
	}
function demoboxOff() {
	document.getElementById("demo-box").style.display='none';
	document.getElementById("demo").style.color="#666363";
	}
// demobox javascript ends 

// pagebox javascript 
function pagesboxOn() {
	document.getElementById("pages-box").style.display='block';
	document.getElementById("pages").style.color="#2196f3";
	demoboxOff();
	accountboxOff();
	}
function pagesboxOff() {
	document.getElementById("pages-box").style.display='none';
	document.getElementById("pages").style.color="#666363";
	}
// pagebox javascript ends

// accountbox javascript 
function accountboxOn() {
	document.getElementById("account-box").style.display='block';
	document.getElementById("account").style.color="#2196f3";
	demoboxOff();
	pagesboxOff();
	}
function accountboxOff() {
	document.getElementById("account-box").style.display='none';
	document.getElementById("account").style.color="#666363";
	}
// accountbox javascript ends

 		function mainSection(){
 			location.reload()
 		}

//  message box section js starts 
	function chatbox(){
		document.getElementById("notif-card").style.display="none"
		if(document.getElementById("chat-box").style.display=="flex"){
			document.getElementById("invalid-chat-box").style.display="block";
			document.getElementById("chat-box").style.display='none';
		}
		else if(document.getElementById("invalid-chat-box").style.display=="block"){
				document.getElementById("invalid-chat-box").style.display="block";
		}
		else{
			document.getElementById("chat-box").style.display='flex';
			document.getElementById("main").style.display="none";
	}
	}
	function chatInvalid(){
		document.getElementById("invalid-chat-box").style.display='none';
		document.getElementById("chat-box").style.display='flex';
	}
//  message box section js ends
// notification box section js starts 

	function notifOn(){
		let notON=document.getElementById("notif-card");
		if(notON.style.display=='flex'){
			notON.style.display='none';
		}
		else{
			notON.style.display='flex';
		}
	}
// notification box section js starts  
// carousel section javascript starts 
  	const gap =0;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// on and off with prev and next button


function carouselControl (){
	document.getElementById("next").style.display='flex';
	document.getElementById("prev").style.display='flex';
}
function carouselControlOFF (){
	document.getElementById("next").style.display='none';
	document.getElementById("prev").style.display='none';
}
	// carousel section javascript ends 








														// lightmode script starts 
						function lightmode(){ 
							// main section of the web starts 
							document.getElementById('blogzine').style.background='';
							// left box 

								// javascript with all text color change 
 						let elements = document.querySelectorAll('.white');
								for (let element of elements) {
  										element.classList.remove('white');
							}

								const dayElements = document.querySelectorAll(' .night');
									for (const img2 of dayElements) {
 										 img2.style.display='none';
										}
										// Images change js 
								const dayElements1 = document.querySelectorAll(' .day');
									for (const img1 of dayElements1) {
 										 img1.style.display='block';
										}
							// important logic for background color of a multiple div with one class
							const divElements = document.querySelectorAll(' .dark-div');
									for (const div of divElements) {
 										 div.style.backgroundColor = '';
										}	
										const divElements2 = document.querySelectorAll(' .dark-div-2');
									for (const div2 of divElements2) {
 										 div2.style.backgroundColor = '';
										}
	}
									

				function respleftBoxON(){
					let lefresp = document.getElementById("resp-left-box")
					if(lefresp.style.display=='block'){
						lefresp.style.display=''
					}
					else{lefresp.style.display="block"}
				}







														// dark mode script starts

 				function darkmode(){
								document.getElementById('blogzine').style.background='#28292a';
 								 							// story section darkmode 
								const dayElements = document.querySelectorAll(' .day');
									for (const img2 of dayElements) {
 										 img2.style.display='none';
										}
								const dayElements1 = document.querySelectorAll(' .night');
									for (const img1 of dayElements1) {
 										 img1.style.display='block';
										}

 						// left box darkmode
 						let elements = document.querySelectorAll('.dark');
								for (let element of elements) {
  										element.classList.add('white');
							}
								// important logic for background color of a multiple div with one class
								const divElements = document.querySelectorAll(' .dark-div');
									for (const div of divElements) {
 										 div.style.backgroundColor = '#1e1e1e';
										}
								const divElements2 = document.querySelectorAll(' .dark-div-2');
									for (const div2 of divElements2) {
 										 div2.style.backgroundColor = '#141519';
										}	
 				}

 										// toggle between dark and light mode

 						function darkmodeToggle(){
							let navheader=document.getElementById('blogzine');
							if(navheader.style.background==''){
								darkmode();
							}
								else{
									lightmode();
								}							
 						}

														// dark mode script ends  