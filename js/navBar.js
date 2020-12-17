
function navbar(selector, burgerSelector) {
    console.log("This is nav bar!");
    console.log("selector "+selector);


    let elementBurger = document.querySelector(burgerSelector);

    elementBurger.addEventListener("click", function() {
        let element = document.querySelector(selector);
        console.log(element.classList);
        if(element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });

}

export default navbar;