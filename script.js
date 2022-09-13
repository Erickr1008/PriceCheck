var mainImage = document.getElementById('mainImage');
var smallImg = document.getElementsByClassName('small-img');
smallImg[0].onclick = function(){
    mainImage.scr = smallImg[0].scr;
}

smallImg[1].onclick = function(){
    mainImage.scr = smallImg[1].scr;
}

smallImg[2].onclick = function(){
    mainImage.scr = smallImg[2].scr;
}

smallImg[3].onclick = function(){
    mainImage.scr = smallImg[3].scr;
}