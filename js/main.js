// import rendering functions
import navBar from './navBar.js';

/*************************
 * NAVIGATION VAR
 *************************/
navBar(".nav-burger-menu", ".nav-burger");

let nav = document.getElementById("nav");
let barIcon = document.getElementById("burger");
let links = document.querySelectorAll("#nav a");

let intro = document.getElementById("intro"),
    about = document.getElementById("about"),
    service = document.getElementById("service"),
    portfo = document.getElementById("portfolio"),
    contact = document.getElementById("contact"),
    footer = document.getElementById("footer");

let aLinkList = document.querySelectorAll(".nav-items > a");


window.addEventListener("scroll", function(event) {

    //console.log(barIcon);

    //console.log(about.offsetTop);
    if(window.pageYOffset > intro.offsetTop && window.pageYOffset < about.offsetTop){
        aLinkList.forEach(link => {
            if(link.classList.contains("a1")) {
                link.classList.add("active");
            }
            if(!link.classList.contains("a1")) {
                link.classList.remove("active");
            }
        });
    }
    if(window.pageYOffset > about.offsetTop - 20 && window.pageYOffset < service.offsetTop) {         
        aLinkList.forEach(link => {
            if(link.classList.contains("a2")) {
                link.classList.add("active");
            }
            if(!link.classList.contains("a2")) {
                link.classList.remove("active");
            }
        });
    }
    if(window.pageYOffset > service.offsetTop - 20 && window.pageYOffset < portfo.offsetTop) {
        aLinkList.forEach(link => {
            if(link.classList.contains("a3")) {
                link.classList.add("active");
            }
            if(!link.classList.contains("a3")) {
                link.classList.remove("active");
            }
        });
    }
    if(window.pageYOffset > portfo.offsetTop - 20 && window.pageYOffset < contact.offsetTop) {
        aLinkList.forEach(link => {
            if(link.classList.contains("a4")) {
                link.classList.add("active");
            }
            if(!link.classList.contains("a4")) {
                link.classList.remove("active");
            }
        });
    }
    if(window.pageYOffset > contact.offsetTop- 40 && window.pageYOffset < footer.offsetTop) {
        aLinkList.forEach(link => {
            if(link.classList.contains("a5")) {
                link.classList.add("active");
            }
            if(!link.classList.contains("a5")) {
                link.classList.remove("active");
            }
        });
    }



    if(about.offsetTop - 20  < window.pageYOffset) {
        // console.log(window.pageYOffset + window.innerHeight);

        // console.log(about.offsetTop + about.offsetHeight);
        console.log("Navigation apearing");
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.color= "black";
        nav.style.backgroundColor = "#ffff";
        barIcon.style.color ="black";
        links.forEach(link => {
            link.style.color = "black";
            // if(link.classList.contains("active")) {
            //     link.style.borderBottom = "solid black 2px";
            // }
        })

    } else {
        console.log("Navigation disapearing");
        nav.style.position = "absolute";
        barIcon.style.color ="#ffff";
        nav.style.top = 20+"px";
        nav.style.backgroundColor = "transparent";
        links.forEach(link => {
            link.style.color = "#ffff";
            // if(link.classList.contains("active")) {
            //     link.style.borderBottom = "solid #ffff 2px";
            // }
        })
    }




})


/*************************
 * ABOUT
 *************************/


if(document.querySelector(".loaders").offsetTop > window.pageYOffset) {
    let nodeListA

    let singleRun = true,
        isVisible = false;

    if (document.querySelector(".loaders").offsetTop < window.pageYOffset + window.innerHeight) {
        isVisible = true
    }
    
    if(singleRun && isVisible) {
        singleRun = false;
        nodeListA = document.querySelectorAll(".loader_loader");

        let l = 1;
        nodeListA.forEach(element => {
            element.classList.add("l"+l);
            l++;
        });
    } 
}

window.addEventListener("scroll", function(event) {
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

/*************************
 * PORTFOLIO
 *************************/
portfolio(".portfolio_buttons > h4")
function portfolio(selector) {
    let element1 = document.querySelectorAll(selector);
    
    // element.forEach(element => {
    //     element.addEventListener() 
    // }) 

    element1.forEach(element => {

        element.addEventListener("click", function(event) {

            // console.log(element.dataset.type);

            let cardElements = document.querySelectorAll(".port_card");

            //console.log(cardElements);

            cardElements.forEach(ele => {
                if(element.dataset.type == "all") {
                    ele.classList.remove("hide");
                } else if(!ele.classList.contains(element.dataset.type)) {
                    ele.classList.add("hide");
                } else {
                    if(ele.classList.contains("hide")) {
                        ele.classList.remove("hide");
                    }
                } 
            })




            element1.forEach(ele => {
                if(ele.classList.contains("active")) {
                    ele.classList.remove("active")
                    ele.classList.add("previus")
                } else {
                    ele.classList.remove("previus")
                }
            });

            element.classList.add("active");
        });

    });
}


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



