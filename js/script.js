var myImg = Array.from(document.querySelectorAll(".model-img img"));
var boxModel = document.querySelector(".box-model");
var boxModelImg = document.querySelector(".box-model .box-img");
var closeModel = document.getElementById("close");
var previous = document.getElementById("prev");
var next = document.getElementById("next");
var indexImg = 0;

for(let i = 0; i < myImg.length; i++){
    myImg[i].addEventListener("click" , displayBox);
}

function displayBox(e) {
    boxModel.style.transform = "scale(1,1)";
    var nawSrc = e.target.src;
    boxModelImg.firstElementChild.src = nawSrc;
    indexImg = myImg.indexOf(e.target);
}
closeModel.addEventListener("click" , closeModels);
previous.addEventListener("click" , previousImg);
next.addEventListener("click" , nextImg);

function closeModels() {
    boxModel.style.transform = "scale(0,0)";
}
function nextImg() {
    boxModelImg.firstElementChild.src = myImg[indexImg].src;
    indexImg++;

    if (indexImg == myImg.length) {
        indexImg = 0;
    }
}
function previousImg() {
    boxModelImg.firstElementChild.src = myImg[indexImg].src;
    indexImg--;
    if (indexImg < 0) {
        indexImg = myImg.length-1;
    }
}

document.addEventListener("keydown" , function(e) {
    if(e.keyCode == 39)
    {
        nextImg();
    } 
    else if(e.keyCode == 37)
    {
        previousImg();
    }
    else if(e.keyCode == 32)
    {
        closeModels();
    }
});
