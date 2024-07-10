const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bee = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 50,
    speed: 0.1,
    image: new Image()
};

bee.image.src = 'bee.png'; 

let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Draw the bee
function drawBee() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bee.image, bee.x - bee.size / 2, bee.y - bee.size / 2, bee.size, bee.size);
}

// Update bee position
function updateBee() {
    let dx = mouse.x - bee.x;
    let dy = mouse.y - bee.y;

    bee.x += dx * bee.speed;
    bee.y += dy * bee.speed;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    updateBee();
    drawBee();
}

bee.image.onload = function() {
    animate();
};

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse.x = canvas.width / 2;
    mouse.y = canvas.height / 2;
});
