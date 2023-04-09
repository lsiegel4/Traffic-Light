// essentially encasing all of this code in a function that takes the doc as its parameter, where doc should reference the html code
// example of anonymous class/lambda expression type syntax

(function(doc) {
    
    // variable syntax: let (name) = value
    // No need to declare type, since js variables can change type
    // Sometimes can get confusing what type you want to represent
    // in this case defining our fields for the function

    let lightOn = false;
    let interval;
    let lastOn = "none";
    
    // Similar idea with parameters of functions

    function removeClasses(elem, colors) {
        let len = colors.length;
        for (let item of elem) {
            for (let i = 0; i < len; i++) {
                // classList returns css classes of variable in form of array
                if (item.classList.contains(colors[i])) {
                    item.classList.remove(colors[i]);
                }
            }
        }
    } 
    
    
    function runInterval(elem, colors) {
        elem[0].classList.add(colors);
        // another example of creating a one-use function
        // setInterval creates interval in which something happens (arg1), in this case the light turns on, for a duration of time (arg2), 1000 ms
        interval = setInterval(function() {
            removeClasses(elem, colors)
        }, 1000);
    } 
    

    function run() {
        let randomNumber;
        let light;
        // in this case lightColor is a list, in js can mutate lists and size of lists easily 
        let lightColor;
        // if none lastOn, first time clicking, can be any of 3 lights
        if (lastOn == "none") {
            // using floor function and random to create a version of randint since js does not have it
            randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber == 0) {
                lightColor = ["red"];
            }
            if (randomNumber == 1) {
                lightColor = ["yellow"];
            }
            if (randomNumber == 2) {
                lightColor = ["green"];
            }
        // otherwise, has to be one of the two not previously on
        } else {
            randomNumber = Math.floor(Math.random() * 2);
            if (lastOn == "red") {
                if (randomNumber == 0) {
                    lightColor = ["yellow"];
                }
                if (randomNumber == 1) {
                    lightColor = ["green"];
                }
            }
            if (lastOn == "yellow") {
                if (randomNumber == 0) {
                    lightColor = ["red"];
                }
                if (randomNumber == 1) {
                    lightColor = ["green"];
                }
            }
            if (lastOn == "green") {
                if (randomNumber == 0) {
                    lightColor = ["red"];
                }
                if (randomNumber == 1) {
                    lightColor = ["yellow"];
                }
            }
        } 
        // querySelectorAll returns NodeList of all the document's elements that match the selectors specified
        light = doc.querySelectorAll("." + lightColor[0] + "-light");
        lastOn = lightColor[0];
        runInterval(light, lightColor);
    } 
    
    function start() {
        let btn = doc.querySelector(".new-light-btn");
        if(btn != null) {
            // onclick tells us what to do when button has been clicked
            btn.onclick = function() {
                run();
            }
        }
    }
    
    start();
})(document);
// document at the end necessary, essentially calling our self defined function on the document (html)