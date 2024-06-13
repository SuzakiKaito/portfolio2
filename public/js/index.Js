const mouseStalker = document.querySelector(".mouse-stalker") 
const scrollContent = document.querySelector(".scroll")
const liElements = document.querySelectorAll('.li_element li');
const topContent = document.querySelector(".top_content")
const myselfContent = document.querySelector(".myself_content")
const workContent = document.querySelector(".work_content")
const contactContent = document.querySelector(".contact_content")
console.log(topContent,myselfContent,workContent,contactContent);

//マウスストーカー
document.addEventListener('mousemove',function(event){
  mouseStalker.style.transform = 'translate('+ event.clientX+'px,'+ event.clientY +'px)'
})

// scrollContent.addEventListener("mouseover", () => {
//   scrollContent.classList.add("mouse-hover"); // 修正
//   console.log("hover");
// });

//要素移動イベント
topContent.addEventListener("click",top_event);
function top_event() {
  console.log("aaa");
  window.scroll({top:0,behavior:'smooth'})
}
myselfContent.addEventListener("click",myself_event);
function myself_event() {
  console.log("bbb");
  window.scroll({top:800,behavior:'smooth'})
}
workContent.addEventListener("click",work_event);
function work_event() {
  console.log("cc");
  window.scroll({top:2200,behavior:'smooth'})
}
contactContent.addEventListener("click",contact_event);
function contact_event() {
  console.log("dd");
  window.scroll({top:3400,behavior:'smooth'})
}



