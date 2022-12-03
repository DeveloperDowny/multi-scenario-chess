import React, { useState } from "react";
import {
  updateHistoryAndResetBoard,
  updateLastNodeAndHistory,
} from "../utils/utils";

// import { Node } from "../dslogic/tree";

// const HistoryThumb = ({ data, whoseMoveNext, arrOfThreadNodes, movNumber })
const HistoryThumb = ({ node, index, setShouldShow }) => {
  console.log(`m fucj ${index} ${node}`);
  console.log(node);
  const [mdata, setMdata] = useState(node.ss);
  // console.log(node);
  // console.log("node");
  // if (node === undefined) return <div></div>;
  // // this.chessBoardState = [[]];
  // const whoseMoveNext = node.whoseMoveNext;
  // // this.winner = "none"; //or "white" or "black"
  // const arrOfThreadNodes = node.links;
  // const data = node.ss;
  // const movNumber = node.movNumber;
  // setMdata(data);

  // let mdata = data;

  return (
    <div className="flexCenter " style={{ flexDirection: "row", gap: "1rem" }}>
      {/* sfd */}
      <div className="flexCenter" style={{ flexDirection: "column" }}>
        {/* <div className="pText">{`${
          node.whoseMoveNext == "white" ? "..." : ""
        } ${node.movNumber})`}</div> */}
        <div>{`Move: ${node.whoseMoveNext == "white" ? "..." : ""} ${
          node.movNumber
        })`}</div>
        <div
          className="flexCenter"
          style={{ flexDirection: "row", gap: "0.5rem" }}
        >
          <div>Thread:</div>
          {node.links != undefined &&
            node.links.map((element, i) => {
              return (
                <div
                  className="thread_div"
                  key={i}
                  onMouseEnter={(e) => {
                    // mdata = element.ss;
                    // console.log(element);
                    setMdata(element.ss);
                  }}
                  onMouseLeave={(e) => {
                    setMdata(node.ss);
                  }}
                  onClick={() => {
                    // console.log(element);
                    // console.log(i);
                    // console.log("i");
                    updateHistoryAndResetBoard(index, i);
                    setShouldShow(true);
                  }}
                >
                  #{i + 1}
                </div>
              );
            })}
        </div>
      </div>

      <img
        className="history_thumb"
        src={mdata}
        alt=""
        width={200}
        onClick={() => {
          setShouldShow(true);
          updateLastNodeAndHistory(node, index);
        }}
      />
    </div>
  );
};

export default HistoryThumb;
