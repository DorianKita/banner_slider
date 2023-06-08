const slideList = [{
    img: "./img/first.jpg",
    txt: "How to become Web Developer?"
},
{
    img: "./img/second.jpg",
    txt: "You just need to chill and code a lot"
},
{
    img: "./img/third.jpg",
    txt: "Just like i did :)"
}];
const time = 4300
const slider = document.querySelector(".slider");
const h1 = document.querySelector("h1");
const dots = [...document.querySelectorAll(".dots span")];
let activeSlide = 0;
let wordIndex = 0;
let txtIndex = -10;
index = 0

const typing = () => {
    if (txtIndex >= 0) {
        h1.textContent += slideList[wordIndex].txt[txtIndex]
    }
    txtIndex++
    if (txtIndex == slideList[wordIndex].txt.length) {
        wordIndex++
        if (wordIndex == slideList.length) return
        txtIndex = 0

        return setTimeout(() => {
            h1.textContent = ""
            typing()
        }, 540)

    }

    setTimeout(typing, 100)
};


const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active")
    dots[activeSlide].classList.add("active")
};

const changeSlide = () => {
    activeSlide++;
    if (activeSlide == slideList.length) activeSlide = 0;
    slider.setAttribute("src", slideList[activeSlide].img)
    index++;
    if (index > 2) {
        h1.textContent = slideList[activeSlide].txt
    }




    changeDot()
};

const keyFunction = (e) => {
    clearInterval(intervalIndex);
    if (e.keyCode == 37) {
        clearInterval(intervalIndex);
        if (activeSlide == 0) {
            activeSlide = slideList.length
        }

        activeSlide--;
        slider.setAttribute("src", slideList[activeSlide].img);
        h1.textContent = slideList[activeSlide].txt;
        changeDot();
        intervalIndex = setInterval(changeSlide, time);

    } else if (e.keyCode == 39) {
        clearInterval(intervalIndex)
        activeSlide++;
        if (activeSlide == slideList.length) {
            activeSlide = 0
        }

        slider.setAttribute("src", slideList[activeSlide].img);
        h1.textContent = slideList[activeSlide].txt;
        changeDot();
        intervalIndex = setInterval(changeSlide, time);
    }
    console.log(activeSlide)
}


document.body.addEventListener("keydown", keyFunction)

let intervalIndex = setInterval(changeSlide, time);
typing()