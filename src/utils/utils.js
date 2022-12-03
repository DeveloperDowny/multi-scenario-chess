import domtoimage from "dom-to-image";
import store from "../app/store";
import {
  addToHistory,
  increment,
  selectGameHistory,
  dupdateTree,
  dupdateLastNodeAndHistory,
  decrement,
  dupdateHistoryAndResetBoard,
} from "../features/counter/CounterSlice";

export function takeSS(gameHistory, setGameHistory) {
  domtoimage
    .toPng(document.querySelector("#game-board"))
    .then(function (dataUrl) {
      //   var img = new Image();
      //   img.src = dataUrl;
      //   document.body.appendChild(img);
      //   add to list. Rerender list in the images tab.

      //   gameHistory.push(dataUrl);
      setGameHistory([...gameHistory, dataUrl]);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

export async function takeSS2() {
  let test = "";
  await domtoimage
    .toPng(document.querySelector("#game-board"))
    .then(function (dataUrl) {
      //   var img = new Image();
      //   img.src = dataUrl;
      //   document.body.appendChild(img);
      //   add to list. Rerender list in the images tab.

      //   gameHistory.push(dataUrl);
      // setGameHistory([...gameHistory, dataUrl]);
      // console.log(store.getState().counter.gameHistory);
      // store.dispatch(addToHistory(dataUrl));
      // store.dispatch(increment());
      test = dataUrl;
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });

  return test;
}

export async function updateTree(chessBoardState, whoseMoveNext) {
  let test = await takeSS2();
  // console.log(`in awati ${test}`);
  store.dispatch(dupdateTree({ chessBoardState, whoseMoveNext, test }));
}

export function updateLastNodeAndHistory(node, index) {
  store.dispatch(dupdateLastNodeAndHistory({ node, index }));
}

export const doneReseting = () => {
  store.dispatch(decrement());
  // store.getState().counter.value = 0;
};

export const updateHistoryAndResetBoard = (indexOfGameHistory, linksIndex) => {
  store.dispatch(
    dupdateHistoryAndResetBoard({ indexOfGameHistory, linksIndex })
  );
};
