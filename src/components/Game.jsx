import "../styles/Game.css";
import piedra from "../assets/images/icon-rock.svg"
import papel from "../assets/images/icon-paper.svg"
import tijera from "../assets/images/icon-scissors.svg"
import { motion } from "framer-motion"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Game = ({contador,setContador}) =>{
const [mensaje,setMensaje] = useState("");
const [color,setColor] = useState({
  col:"gris",
  imagen:"no"
});
const [color2,setColor2] = useState({
  col:"gris",
  imagen:"no"
});

let Danimacion=10;
let Sanimation=1.1;
let decision="";

  const juego = (eleccion) =>{
    document.getElementById("pantallappal").className = 'animando';
    setTimeout(() => document.getElementById("pantallappal").style.display="none" , 500)
    setTimeout(() => document.getElementById("contjugando").className = 'animando2' , 500)
    setTimeout(() => document.getElementById("extrival").className = 'circuloint2' , 1501)
    setTimeout(() => document.getElementById("centro").style.display="flex" , 2000)
    
    
    let maquina =random(1,3);
    
    if(maquina===1){ setTimeout(() => setColor2({col:"blue", imagen:papel}) , 1500);}
    if(maquina===2){setTimeout(() => setColor2({col:"yellow", imagen:tijera}) , 1500);}
    if(maquina===3){setTimeout(() => setColor2({col:"red", imagen:piedra}) , 1500);}
    
  
    if(eleccion===1)
    { setColor({col:"blue", imagen:papel})
      if(maquina===2){
      perder()
      }
      if(maquina===1){decision="DRAW";}
      if(maquina===3){
      ganar()}
  
  
    }
    if(eleccion===2){
      setColor({col:"yellow", imagen:tijera})
      if(maquina===3){perder()}
      if(maquina===2){decision="DRAW";}
      if(maquina===1){ganar()}
  
    }
    if(eleccion===3){
      setColor({col:"red", imagen:piedra})
      if(maquina===1){perder()}
      if(maquina===3){decision="DRAW";}
      if(maquina===2){ganar()}
    }
    
    setMensaje(decision);

    function perder(){
      decision="YOU LOSE";setTimeout(() => setContador(contador-1) , 2000)
    }
    function ganar(){
      decision="YOU WIN";setTimeout(() => setContador(contador+1) , 2000)
    }
  }

  const inicio = () =>{
    document.getElementById("pantallappal").className = 'contenedorppaljuego';
    document.getElementById("pantallappal").style.display="grid"
    document.getElementById("contjugando").className = 'contjugando';
    document.getElementById("extrival").className = 'fondorival';
    setColor2({col:"gris",imagen:"no"}) 
    document.getElementById("centro").style.display="none"
  }
  return(
    <>
    
    <main className="contenedorgame">
      <motion.div id="pantallappal" className="contenedorppaljuego">
        <div className="ubicaciongrid">
          <motion.div whileHover={{y:Danimacion,scale: Sanimation}} whileTap={{ scale: 0.9 }}  className="circuloext blue" onClick={()=>juego(1)}>
            <div className="circuloint">
              <img src={papel} alt="icon paper" />
            </div>
          </motion.div>
        </div>
        <div className="ubicaciongrid">
          <motion.div whileHover={{y:Danimacion,scale: Sanimation}} whileTap={{ scale: 0.9 }} className="circuloext yellow" onClick={()=>juego(2)}>
            <div className="circuloint">
              <img src={tijera} alt="icon scissors" />
            </div>
          </motion.div>
        </div>
        <div className="ubicaciongrid rock">
          <motion.div whileHover={{y:Danimacion,scale: Sanimation}} whileTap={{ scale: 0.9 }} className="circuloext red"  onClick={()=>juego(3)}>
            <div className="circuloint">
              <img src={piedra} alt="icon-rock" />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
    <Jugando color={color} color2={color2} mensaje={mensaje} inicio={inicio}></Jugando>
    </main>
    
    {/**   
     * You Picked
  The House Picked

  You Win
  You Lose

  Play Again */}
    </>
  );

}

// eslint-disable-next-line react/prop-types
const Jugando = ({color,color2,mensaje,inicio}) =>{
  return(
    <>
    <div id="contjugando" className="contjugando">
      <div>
        <div className="cabec"><span>You Picked</span></div>
        <div className={color.col+ " circuloext2"}>
          <div className="circuloint2">
            {color.imagen==="no"?"":<img src={color.imagen} alt="icon" />}
          </div>
        </div>
      </div>
      <div className="contdefi" id="centro">
        <div className="contmensaje"><span>{mensaje}</span></div>
        <div className="contbutton"><button onClick={inicio}>PLAY AGAIN</button></div>
      </div>
      <div>
      <div className="cabec"><span>The House Picked</span></div>
      <div className={color2.col+ " circuloext2"}>
          <div id="extrival" className="fondorival">
            {color2.imagen==="no"?"":<img src={color2.imagen} alt="icon" />}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


const random = (min, max) => {
  return Math.floor(Math.random() 
          * (max - min + 1)) + min;
};

export default Game