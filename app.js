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
const time = 2000
const slider = document.querySelector(".slider");
const h1 = document.querySelector("h1");
const dots = [...document.querySelectorAll(".dots span")];
let activeSlide = 0;


const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active")
    dots[activeSlide].classList.add("active")
};

const changeSlide = () => {
    activeSlide++;
    if (activeSlide == slideList.length) activeSlide = 0;
    slider.setAttribute("src", slideList[activeSlide].img)
    h1.textContent = slideList[activeSlide].txt


    changeDot()
};

setInterval(changeSlide, time);