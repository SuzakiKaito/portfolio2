const mouseStalker = document.querySelector(".mouse-stalker") 
const scrollContent = document.querySelector(".scroll")
const liElements = document.querySelectorAll('.li_element li');
const topContent = document.querySelector(".top_content")
const myselfContent = document.querySelector(".myself_content")
const workContent = document.querySelector(".work_content")
const contactContent = document.querySelector(".contact_content")
console.log(liElements);
// console.log(mouseStalker,scrollContent);

document.addEventListener('mousemove',function(event){
  mouseStalker.style.transform = 'translate('+ event.clientX+'px,'+ event.clientY +'px)'
})

scrollContent.addEventListener("mouseover",()=>{
  scrollContent.classList.add= "mouse-hover";
  console.log("hover");
})
// liElements.forEach(li =>{
//   li.addEventListener(click,() =>{
//     console.log(li);
//     const clickedLi = li;

//     window.scrollTo(0, window.scrollY + 500);
//   })
// })
topContent.addEventListener("click",top_event);
function top_event() {
  window.scroll({top:0,behavior:'smooth'})
}
myselfContent.addEventListener("click",myself_event);
function myself_event() {
  window.scroll({top:1000,behavior:'smooth'})
}
workContent.addEventListener("click",work_event);
function work_event() {
  window.scroll({top:2300,behavior:'smooth'})
}
contactContent.addEventListener("click",contact_event);
function contact_event() {
  window.scroll({top:3400,behavior:'smooth'})
}





// const slider = document.querySelector(".work_slider");
// // const slides = document.querySelectorAll('.work_slider img');
// // const slideWidth = slides[0].clientWidth;
// const slider_private = document.querySelector(".private_slider");

// console.log(slider,slider_private);


// let current =0;
// let count =0;

// function workSlide(){
//   current++;
//   // console.log("cc");
//   workSlider();
// }

// function workSlider(){
//   if(current >1 ){
//     current = -1;
//   }
//   const width = document.querySelector(".slider_wrap").offsetWidth;
//   slider.style.transform = `translateX(${-current * width}px)`;
// }

// setInterval(workSlide,3000);



// function privateSlide(){
//   count++;
//   privateSlider();
// }
// function privateSlider(){
//   if(count >1){
//     count =-1;
//   }
//   const widths = document.querySelector(".slide_wrap").offsetWidth;
//   slider_private.style.transform = `translateX(${-current * widths}px)`
// }

// setInterval(privateSlide,3000)


// function toggleFocusClass() {
//   // const links = document.querySelectorAll('.work_page a');
//   const pages = document.querySelectorAll(".work_page a")
  
//   const currentFocus = document.querySelector('.work_page a.focus');

  
//   if (currentFocus) {
//     currentFocus.classList.remove('focus');
//     const nextFocus = currentFocus.nextElementSibling || pages[0]; 
//     nextFocus.classList.add('focus');
//   }
// }

// // 2000ミリ秒ごとにtoggleFocusClass関数を呼び出す
// setInterval(toggleFocusClass, 3000);