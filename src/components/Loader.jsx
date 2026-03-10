import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {

  const [progress,setProgress] = useState(0);

  useEffect(()=>{

    const interval = setInterval(()=>{

      setProgress((p)=>{

        if(p >= 100){
          clearInterval(interval);

          setTimeout(()=>{
            onFinish();
          },500);

          return 100;
        }

        return p + 2;

      });

    },80);

  },[]);

  return(

    <div style={{
      height:"100vh",
      width:"100%",
      background:"black",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      color:"#00ffff"
    }}>

      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
        style={{width:"90px"}}
      />

      <h3 style={{marginTop:"20px"}}>
        INITIALIZING TECHHELLO SYSTEM...
      </h3>

      <p style={{fontSize:"12px"}}>
        Booting AI nexus
      </p>

      <div style={{
        width:"320px",
        height:"10px",
        border:"1px solid cyan",
        marginTop:"15px"
      }}>

        <div style={{
          height:"100%",
          width:progress+"%",
          background:"cyan",
          transition:"width 0.1s"
        }}/>

      </div>

    </div>

  )

}