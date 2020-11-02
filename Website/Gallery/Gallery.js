
var pic = [
    "Foto Boomski/1.jpg",
    "Foto Boomski/2.jpg",
    "Foto Boomski/3.jpg",
    "Foto Boomski/4.jpg",
    "Foto Boomski/5.jpg"
];

var btn = document.querySelector("Button");
var img = document.querySelector("img");
var count = 0;

btn.addEventListener("click", function(){
    if(count === 5){
        count = 0;
    }
    img.src = pic[count];
    count = count +1;
});