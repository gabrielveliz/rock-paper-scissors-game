import "../styles/Score.css";
import logo from "../assets/images/logo.svg"

// eslint-disable-next-line react/prop-types
const Score = ({contador}) =>{
  return(
    <>
    <header>
      <div  className="contlogosco">
          <div className="contlogo">
            <img role="logo" src={logo} alt="Logo"/>
          </div>
        <div className="contscore">
          <div className="contscoreor">
            <span className="scoretitulo">Score</span>
            <span className={
              contador>=0 ? 'scorecontador' : 'perdiendo'}>{contador}</span>
          </div>
          
        </div>
      </div>
    </header>
    
    </>
  );
}

export default Score;