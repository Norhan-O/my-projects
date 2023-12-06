// const intervalID = setInterval(myCallback, 1000, 'Hello', 'doc');

// function myCallback(c,v) {
//     console.log(c,v, Date.now());
// }


let intervalID;
let isRed = true;


function startChange() {
    if (!intervalID) {
        intervalID = setInterval(drawCircle, 1000);
    }
}

function drawCircle() {
 const canvas = document.getElementById('myCanvas');

 if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 50;

    const startAngle = 0;
    const endAngle = Math.PI * 2;
    const anticlockwise = false;


ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 2;


if(isRed) {
    ctx.fillStyle = 'red';

}else {
    ctx.fillStyle = 'white'
}


ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

isRed =! isRed;

}
 }





function stopChange() {
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);