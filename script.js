var main = document.querySelector("main")
var imgbox = document.querySelector("#img")
var img = document.querySelector("#img img")
var btns = document.querySelector("#buttons")

var posX = 175;
var posY = 175;
btns.addEventListener("click", function (dtl) {

    console.log(dtl);


    if (dtl.target.id === "up") {
        console.log("up");
        posY -= 30
        imgbox.style.top = posY + "px"
        img.setAttribute('src', "./imgs/topWalk.gif")
    }
    else if (dtl.target.id === "down") {
        console.log("down");
        posY += 30
        imgbox.style.top = posY + "px"
        img.setAttribute('src', "./imgs/backWalk.gif")
    }
    else if (dtl.target.id === "right") {
        console.log("right");
        posX += 150
        imgbox.style.left = posX + "px"
        img.setAttribute('src', "./imgs/leftrun.gif")
    }
    else if (dtl.target.id === "left") {
        console.log("left");
        posX -= 30
        imgbox.style.left = posX + "px"
        img.setAttribute('src', "./imgs/leftWalk.gif")
    }
    else {
        img.setAttribute('src', "./imgs/back.gif")
    }


})