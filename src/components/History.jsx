import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Node } from "../dslogic/tree";
import {
  selectCount,
  selectGameHistory,
} from "../features/counter/CounterSlice";
import HistoryThumb from "./HistoryThumb";

// const dispatch = useDispatch();
const History = ({ mmgameHistory, setShouldShow }) => {
  const test = useRef(null);
  let gameHistory = useSelector(selectGameHistory);
  let count = useSelector(selectCount);
  let m2 = [];

  React.useEffect(() => {
    console.log(gameHistory);
    console.log("gameHistory is un");
    // gameHistory = gameHistory == undefined ? [] : gameHistory;

    // m2 = gameHistory.map((node, i) => {
    //   return <HistoryThumb key={i} node={node} />;
    // });
    // console.log(m2);

    // setMgameHistoryM(m2);

    // console.log("gameHistory abov");
    // console.log(test.current);

    // console.log(`in use efect gamehis ${count}`);
    if (test.current == null) return;

    test.current.scrollTop = -10000000000000;
    // console.log(`in use efect gamehis ${count}`);
  }, [gameHistory]);

  // let mgameHistory = gameHistory.map((mdata) => {
  //   let data = mdata["payload"];
  //   // console.log(data);
  //   // console.log("data");

  //   return <img key={data} src={data} alt="" width={200} />;
  // });

  // let m2 = gameHistory.map(({ node, i }) => {
  //   console.log(`received node ${node}`);
  //   if (node === undefined) return;
  //   return <HistoryThumb key={i} node={node["payload"]} />;
  // });

  return (
    <div className="history_section__parent">
      <div className="history_section" id="history" ref={test}>
        {gameHistory != undefined &&
          gameHistory.map((node, i) => {
            console.log(node);
            console.log(i);
            console.log("in history.jsx");
            if (node == undefined) return;
            return (
              <HistoryThumb
                key={i}
                node={node}
                index={i}
                setShouldShow={setShouldShow}
              />
            );
          })}
        <div
          className="h1Text"
          style={{
            alignSelf: "flex-end",
            margin: "0.5rem 2rem",
            fontSize: "2rem",
          }}
        >
          History
        </div>
        {/* {mgameHistoryM} */}
        {/* {m2} */}
        {/* <HistoryThumb node={newNode} /> */}
        {/* {mgameHistory}
         */}
        {/*  */}
      </div>
    </div>
  );
};

export default History;
