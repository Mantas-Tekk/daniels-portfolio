// import rendering functions
import navBar from './navBar.js';

/*************************
 * NAVIGATION VAR
 *************************/
navBar(".nav-burger-menu", ".nav-burger");

/*************************
 * ABOUT
 *************************/
function about() {

}

window.addEventListener("scroll", function(event) {
    let elem = document.getElementById("loaders");
    // console.log(elem.clientHeight);
    // console.log(window.pageYOffset + window.innerHeight);
    // console.log(document.querySelector(".loaders").offsetTop);
    let nodeListA

    let singleRun = true,
        isVisible = false;

    if (document.querySelector(".loaders").offsetTop < window.pageYOffset + window.innerHeight) {
        isVisible = true
    }
    
    if(singleRun && isVisible) {
        singleRun = false;
        nodeListA = document.querySelectorAll(".loader_loader");
        // console.log(nodeListA);

        let l = 1;
        nodeListA.forEach(element => {
            element.classList.add("l"+l);
            l++;
        });
    } 

})


// import leftProgressBars from '../data/progresBarData.js';
let timer3 = null;

let a = [
    getTextWidth("Tekknow Melowski", "bold 51px arial"),
    getTextWidth("Developer", "bold 52px arial"),
    getTextWidth("Designer", "bold 52px arial")];

let b = [
    getTextWidth("Tekknow Melowski", "bold 41px arial"),
    getTextWidth("Developer", "bold 42px arial"),
    getTextWidth("Designer", "bold 42px arial")];

let c = [
    getTextWidth("Tekknow Melowski", "bold 31px arial"),
    getTextWidth("Developer", "bold 32px arial"),
    getTextWidth("Designer", "bold 32px arial")];

let introElement = document.getElementById("body");

window.addEventListener("resize", function(event) {

    if(introElement.offsetWidth > 700) {

        if(timer3 != null) 
            clearInterval(timer3);
        resetAnimation(a)
        headerAnimation(a);
    }
    if(introElement.offsetWidth < 700 && introElement.offsetWidth > 500) {

        if(timer3 != null)
            clearInterval(timer3);
        resetAnimation(b)
        headerAnimation(b);

    }
    if(introElement.offsetWidth < 500) {

        if(timer3 != null)
            clearInterval(timer3);
        resetAnimation(c)
        headerAnimation(c);
    }

});

window.addEventListener('load', (event) => {
    if(introElement.offsetWidth > 700) {
        resetAnimation(a)
        headerAnimation(a)
    }
    if(introElement.offsetWidth < 700 && introElement.offsetWidth > 500) {
        resetAnimation(b)
        headerAnimation(b) 
    }
    if(introElement.offsetWidth < 500) {
        resetAnimation(c)
        headerAnimation(c) 
    }
  });



function resetAnimation(sizes) {
    let nodeList = document.querySelectorAll(".header-text");
    let index = 0;
    nodeList.forEach(element => {
        if(index == 0) {
            element.style.width = sizes[0] + "px";
            element.classList.remove("hidden");
        } else {
            element.style.width = 0 + "px";
            element.classList.add("hidden");
        }
        index++;
    });
}

function headerAnimation(sizes) {
    let a = sizes
    let index = 0;

    timer3 = setInterval(function () {
        let nodeList = document.querySelectorAll(".header-text");

        let curentNumber = nodeList[index].style.width;
        curentNumber = curentNumber.replace("px", "");

        let totalTime = 500;
        let fps = 60;
        const timegap = 1000 / fps;
        const totalFrames = totalTime / 1000 * fps;

        const timer = setInterval(function () {
            curentNumber -= a[index] / totalFrames;

            if (curentNumber <= 0) {
                nodeList[index].classList.add("hidden");
                nodeList[index].style.width = 0 + "px";

                clearInterval(timer);
                index++;
                if (index > 2)
                    index = 0;
                nodeList[index].classList.remove("hidden");

                const timer2 = setInterval(function () {

                    curentNumber += a[index] / totalFrames;
                    if (curentNumber >= a[index]) {
                        clearInterval(timer2);
                        nodeList[index].style.width = a[index] + "px";
                    } else {
                        nodeList[index].style.width = curentNumber + "px";
                    }
                }, timegap)
                
            }
            nodeList[index].style.width = curentNumber + "px";
        }, timegap);

    }, 4000)
}

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}



