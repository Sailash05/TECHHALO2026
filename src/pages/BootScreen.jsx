import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CursorTrail from "../components/CursorTrail";
import SpaceBackground from "../components/SpaceBackground";

export default function BootScreen(){

const [progress,setProgress] = useState(0);
const [textIndex,setTextIndex] = useState(0);

const navigate = useNavigate();

const messages = [
"INITIALIZING TECHHELLO SYSTEM...",
"Booting AI Nexus",
"Loading Event Modules",
"Preparing Interface"
];

useEffect(()=>{

const timer = setInterval(()=>{

setProgress(prev=>{

if(prev >= 100){

clearInterval(timer);

setTimeout(()=>{
navigate("/home");
},600);

return 100;

}

return prev + 1;

});

},40);

return ()=>clearInterval(timer);

},[]);


useEffect(()=>{

const textTimer = setInterval(()=>{

setTextIndex(prev => {
if(prev < messages.length - 1){
return prev + 1;
}
return prev;
});

},1200);

return ()=>clearInterval(textTimer);

},[]);

return(

<div className="boot-screen">
<CursorTrail/>
<SpaceBackground/>

<div className="boot-container">

<img
src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
className="boot-robot"
/>

<h2 className="boot-title">{messages[textIndex]}</h2>

<div className="boot-bar">

<div
className="boot-progress"
style={{width:progress+"%"}}
/>

</div>

<p className="boot-percent">{progress}%</p>

</div>

</div>

)

}