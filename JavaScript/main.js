// Video Section
// Video Section Variables
let videoLists = document.querySelectorAll(".videos .holder .list ul li");
let videoImg = document.querySelector(".videos .holder .preview img");
let imgsArray = [
  "video-preview",
  "video-preview1",
  "video-preview2",
  "video-preview3",
  "video-preview4",
  "video-preview5",
  "video-preview6",
];
let videoTitle =document.querySelectorAll('.videos .holder .list ul li p')
let info = document.querySelector('.videos .holder .preview .info')

videoLists.forEach((list, i) => {
  list.onclick = () => {
    videoImg.src = "imgs/" + imgsArray[i] + ".jpg";
info.textContent= videoTitle[i].textContent;
videoLists.forEach(list=>{list.classList.remove('active')})
list.classList.add('active')
};
});
