/*
UPDATE 2023.03.07
*/

const modalActions = function(objID){
 const mybody = document.getElementsByTagName('body')[0];
 const myModal = document.getElementById(objID);
 let myActiveElement = "";

 const getfocus = function(){ myActiveElement = document.activeElement; myModal.querySelectorAll('a,button')[0].focus(); } 
 const setfocus = function(){ myActiveElement.focus(); } 
 const modalStart = function(){ myModal.classList.add('active'); mybody.classList.add('no-scroll'); getfocus(); }
 const modalEnd = function(){ myModal.classList.remove('active'); mybody.classList.remove('no-scroll'); setfocus(); }
 const closeButton = myModal.querySelectorAll("[data-closemodal]");
 for(let i = 0; i<closeButton.length; i++) { closeButton[i].addEventListener('click' , modalEnd); }	
 const modalesc = function(){ if (event.key === "Escape" && myModal ) { modalEnd(); } }
 document.addEventListener('keydown', modalesc,false);
 modalStart();
}
