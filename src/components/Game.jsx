import "../styles/Game.css";
import piedra from "../assets/images/icon-rock.svg"
import papel from "../assets/images/icon-paper.svg"
import tijera from "../assets/images/icon-scissors.svg"


const Game = () =>{

  return(
    <>
    <main className="contenedorgame">
      <div className="contenedorppaljuego">
        <div className="ubicaciongrid">
          <div className="circuloext blue">
            <div className="circuloint">
              <img src={papel} alt="icon paper" />
            </div>
          </div>
        </div>
        <div className="ubicaciongrid">
          <div className="circuloext yellow">
            <div className="circuloint">
              <img src={tijera} alt="icon scissors" />
            </div>
          </div>
        </div>
        <div className="ubicaciongrid rock">
          <div className="circuloext red">
            <div className="circuloint">
              <img src={piedra} alt="icon-rock" />
            </div>
          </div>
        </div>
      </div>
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

export default Game