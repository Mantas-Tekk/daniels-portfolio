
function navbar(selector, burgerSelector) {
    
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