
// import leftProgressBars from '../data/progresBarData.js';

console.log("Hello");

headerAnimation();

function headerAnimation() {
    let index = 0;

    const timer3 = setInterval(function () {
        let nodeList = document.querySelectorAll(".header-text");
        // element width
        let a = [408, 225, 210];

        let curentNumber = nodeList[index].style.width;
        curentNumber = curentNumber.replace("px", "");

        let totalTime = 1000;
        let fps = 30;
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
                    }
                    nodeList[index].style.width = curentNumber + "px";
                }, timegap)
            }
            nodeList[index].style.width = curentNumber + "px";
        }, timegap);

    }, 4000)

}


