import Particle from './particle';
import Mouse from './mouse';
import './style.css';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let MOUSE = {
    x: 0,
    y: 0,
    vel: {
        x: 0,
        y: 0
    },
    speed: 0
}

const M = new Mouse();


let NUMBER_PARTICLE = 2500;
let particles;

const init = () => {
    particles = [];
    for(let i = 0; i <= NUMBER_PARTICLE; i++) particles.push(new Particle(canvas));
}

init();

const animate = () =>{
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx);
    });
    M.draw(ctx);
    
    
};
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('mousemove', (e) => {

    M.dX = Math.abs(e.clientX - M.x);
    M.dY = Math.abs(e.clientY - M.y);

    M.speed = Math.hypot(M.dX, M.dY);

    M.x = e.clientX;
    M.y = e.clientY;
    animate();
});

