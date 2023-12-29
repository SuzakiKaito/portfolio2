const slider = document.querySelector(".work_slider");
// const slides = document.querySelectorAll('.work_slider img');
// const slideWidth = slides[0].clientWidth;

console.log(slider);


let current =0;

function nextSlide(){
  current++;
  console.log("cc");
  updateSlider();
}

function updateSlider(){
  if(current >1 ){
    current = -1;
  }
  const width = document.querySelector(".slider_wrap").offsetWidth;
  slider.style.transform = `translateX(${-current * width}px)`;
}






setInterval(nextSlide,3000);