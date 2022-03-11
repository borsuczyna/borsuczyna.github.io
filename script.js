var fps = 60;
var canvas = screen = ctx = null;

function getTickCount() {
    return (new Date()).getTime();
}

function updateWindow() {
    canvas.width = screen.offsetWidth;
    canvas.height = screen.offsetHeight;
    ctx.clearRect(0, 0, screen.offsetWidth, screen.offsetHeight);

    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100,50);
    ctx.lineTo(50, 100);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#0f0';
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(200,50);
    ctx.lineTo(250, 100);
    ctx.closePath();
    ctx.fill();
}

async function onLoad(newColor)
{
    window.setInterval(updateWindow, 1000/fps);
    canvas = document.getElementById("hexagon");
    screen = document.getElementById("screen");
    ctx = canvas.getContext('2d');
}