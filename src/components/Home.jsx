import React, { useEffect, useState } from "react";
import Game from "./game";
import html2canvas from "html2canvas";

import "./Home.css";
import History from "./History";
import { Tree } from "../dslogic/tree";
import { takeSS, updateTree } from "../utils/utils";
import initialiseChessBoard1 from "../assets/games/game1";

// function takeSS2() {
//   html2canvas(document.querySelector("#game-board")).then((canvas) => {
//     document.body.appendChild(canvas);
//   });
// }

//   html2canvas(document.getElementById("#gameDiv"), {
//     onrendered: function (canvas) {
//       let theCanvas = canvas;

//       canvas.toBlob(function (blob) {
//         saveAs(blob, "Dashboard.png");
//       });
//     },
//   });

const Home = () => {
  useEffect(() => {
    updateTree(initialiseChessBoard1(), "white");

    return () => {};
  }, []);

  //   let gameHistory = [];

  const [gameHistory, setGameHistory] = useState([]);
  const [shouldShow, setShouldShow] = useState(false);

  let mTree = new Tree();
  let listOfMoves = ["12", "20", "30", "40", "57"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div className="h1Text" style={{ margin: "2rem" }}>
        Multi-Scenario Chess
      </div>

      {shouldShow && (
        <div className="pText" style={{ fontSize: "1rem", margin: ".5rem" }}>
          *click on board to refresh*
        </div>
      )}
      <div
        className="gameDiv "
        id="gameDiv"
        style={{
          maxWidth: "376px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Game
          setShouldShow={setShouldShow}
          position={initialiseChessBoard1()}
        />
        {/* // gameHistory={gameHistory} setGameHistory={setGameHistory} /> */}
      </div>

      {/* <div className="history_section"> */}
      {/* <div>Game History</div> */}
      <History gameHistory={gameHistory} setShouldShow={setShouldShow} />
      {/* </div> */}

      <div className="temp flexCenter">
        {/* <button
          className="mbutton"
          onClick={() => takeSS(gameHistory, setGameHistory)}
        >
          Temp Button
        </button> */}
        {/* <History gameHistory={gameHistory} /> */}
        {/* {gameHistory.forEach((element) => {
          console.log(gameHistory);
          return <p>{element}</p>;
        })}
        fg */}
      </div>
    </div>
  );
};

export default Home;
