import { useEffect, useRef } from "react";

export default function SpaceBackground(){

const canvasRef = useRef(null);

useEffect(()=>{

const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

window.addEventListener("mousemove",(e)=>{

mouseX = (e.clientX - window.innerWidth/2) * 0.02;
mouseY = (e.clientY - window.innerHeight/2) * 0.02;

});

const stars=[];

for(let i=0;i<100;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*1.6
});

}

function animate(){

ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(star=>{

star.y += 0.4;

if(star.y > canvas.height){
star.y = 0;
}

/* apply cursor movement */

const x = star.x + mouseX;
const y = star.y + mouseY;

ctx.beginPath();
ctx.arc(x,y,star.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

},[]);

return(
<canvas className="space-bg" ref={canvasRef}/>
);

}
