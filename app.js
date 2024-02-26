let currentImg = document.getElementById("currentImg");
let beauty = document.querySelectorAll(".beauty");

currentImg.src = "./assct/imgs/heart-nature-25446913.jpg";
for (let i = 0; i < beauty.length; i++) {
  beauty[i].onclick = function () {
    currentImg.src = this.src;
  };
}
