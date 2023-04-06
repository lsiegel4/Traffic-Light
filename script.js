;(function(doc) {
    let lightOn = false;
    let interval;
    let lastOn = "none";
    
    
    function removeClasses(elem, colors) {
        let len = colors.length;
        for (let item of elem) {
            for (let i = 0; i < len; i++) {
                if (item.classList.contains(colors[i])) {
                    item.classList.remove(colors[i]);
                }
            }
        }
    } 
    
    
    function runInterval(elem, colors) {
        elem[0].classList.add(colors);
        interval = setInterval(function() {
            removeClasses(elem, colors)
        }, 1000);
    } 
    

    function run() {
        let randomNumber;
        let light;
        let lightColor;
        if (lastOn == "none") {
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
        light = doc.querySelectorAll("." + lightColor[0] + "-light");
        lastOn = lightColor[0];
        runInterval(light, lightColor);
    } 
    
    function start() {
        let btn = doc.querySelector(".new-light-btn");
        if(btn != null) {
            btn.onclick = function(event) {
                run();
            }
        }
    }
    
    start();
})(document);