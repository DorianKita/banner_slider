const slideList = [{
    img: "./img/first.jpg",
    txt: "How to become Web Developer?"
},
{
    img: "./img/second.jpg",
    txt: "You just need to learn a lot!"
},
{
    img: "./img/third.jpg",
    txt: "Just like i did :)"
}];

const slider = document.querySelector(".slider");
const h1 = document.querySelector("h1");
let index = 1
const changeSlide = () => {
    if (index == slideList.length) index = 0;
    slider.setAttribute("src", slideList[index].img)
    h1.textContent = slideList[index].txt

    index++;
};

setInterval(changeSlide, 2000);