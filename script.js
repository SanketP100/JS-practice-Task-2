var main = document.querySelector("main")
var imgbox = document.querySelector("#img")
var img = document.querySelector("#img img")
var btns = document.querySelector("#buttons")

var posX = 175;
var posY = 175;

btns.addEventListener("click", dtl => {
    
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

document.addEventListener('keyup',keydtl => {
   
    if (keydtl.key == 'ArrowUp') {
        console.log("up");
        posY -= 30
        imgbox.style.top = posY + "px"
        img.setAttribute('src', "./imgs/topWalk.gif")
        
    }else if (keydtl.key == 'ArrowDown') {
        console.log("down");
        posY += 30
        imgbox.style.top = posY + "px"
        img.setAttribute('src', "./imgs/backWalk.gif")
        
    }
    else if (keydtl.key == 'ArrowRight') { 
        console.log("right");
        posX += 150
        imgbox.style.left = posX + "px"
        img.setAttribute('src', "./imgs/leftrun.gif")
        
    }else if (keydtl.key == 'ArrowLeft') {
        console.log("left");
        posX -= 30
        imgbox.style.left = posX + "px"
        img.setAttribute('src', "./imgs/leftWalk.gif")
         
    }
    else {
        img.setAttribute('src', "./imgs/back.gif")
    }
    
})







// chatGpt kadun smjun ghetlel Logic

// function moveCharacter(dtl) {

//     if (dtl === "up") {
//         console.log("up");
//         posY -= 30;
//         imgbox.style.top = posY + "px";
//         img.setAttribute('src', "./imgs/topWalk.gif");

//     } else if (dtl === "down") {
//         console.log("down");
//         posY += 30;
//         imgbox.style.top = posY + "px";
//         img.setAttribute('src', "./imgs/backWalk.gif");

//     } else if (dtl === "right") {
//         console.log("right");
//         posX += 150;
//         imgbox.style.left = posX + "px";
//         img.setAttribute('src', "./imgs/leftrun.gif");

//     } else if (dtl === "left") {
//         console.log("left");
//         posX -= 30;
//         imgbox.style.left = posX + "px";
//         img.setAttribute('src', "./imgs/leftWalk.gif");

//     } else {
//         img.setAttribute('src', "./imgs/back.gif");
//     }
// }

// // Button click handler
// btns.addEventListener("click", function (dtl) {
//     moveCharacter(dtl.target.id);
// });

// // Keyboard arrow key handler
// document.addEventListener("keyup", function (keydtl) {
   
//     const keyMap = {
//         "ArrowUp": "up",
//         "ArrowDown": "down",
//         "ArrowRight": "right",
//         "ArrowLeft": "left"
//     };

//     moveCharacter(keyMap[keydtl.key] || "");
// });