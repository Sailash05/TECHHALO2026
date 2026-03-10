import { useEffect, useRef } from "react";

const SpaceParallax = () => {

    const containerRef = useRef(null);

    useEffect(()=>{

    const container = containerRef.current;

    const handleMove = (e)=>{

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    container.style.transform = `translate(${x}px, ${y}px)`;

    };

    window.addEventListener("mousemove", handleMove);

    return ()=>{
    window.removeEventListener("mousemove", handleMove);
    };

    },[]);

    return(

    <div ref={containerRef} className="space-parallax">

    <img src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" className="planet p1"/>
    <img src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" className="planet p2"/>

    </div>

    );

}

export default SpaceParallax;