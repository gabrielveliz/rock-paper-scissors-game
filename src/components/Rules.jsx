import "../styles/Rules.css";
import cerrar from "../assets/images/icon-close.svg"
import imgregla from "../assets/images/image-rules.svg"
import { motion } from "framer-motion"

const Rules = () =>{

  return(
  <>
  <motion.div whileHover={{scale: 1.1}} className="botonrules" role="button" onClick={()=>abrir("flex")}>
    <span>Rules</span>
  </motion.div>
  <Tablero></Tablero> 
  </>);

}

const Tablero = () =>{
  return(
    <div className="flotante" id="tableroreglas" >
    <div className="contenedorreglas">
      <div className="conttituloreglas"><span>Rules</span></div>
      <div className="contimgcerrar" onClick={()=>abrir("none")}><img src={cerrar} alt="iconocerrar" /></div>
      <div className="contimgreglas"><img src={imgregla} alt="reglas" /></div>
    </div>
  </div>
  );
}

const abrir = (opcion) =>{
  document.getElementById("tableroreglas").style.display=opcion ;
}


export default Rules;