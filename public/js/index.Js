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