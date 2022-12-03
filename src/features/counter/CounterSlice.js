import { createSlice, current } from "@reduxjs/toolkit";
import initialiseChessBoard1 from "../../assets/games/game1";
import { Tree, Node } from "../../dslogic/tree";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    gameHistory: [],
    gameTree: new Tree(),
    squares: initialiseChessBoard1(),
    player: 1,
    sourceSelection: -1,
    status: "",
    turn: "white",
    currMovNum: 1,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addToHistory: (state, move) => {
      state.gameHistory.push(move);
    },
    dupdateTree: (state, data) => {
      const { chessBoardState, whoseMoveNext, test } = data["payload"];
      // console.log(`testeci ${test} `);
      // const whoseMoveNext = data["payload"]["whoseMoveNext"];
      // const chessBoardState = data["payload"]["chessBoardState"];
      // console.log(`${chessBoardState} ${whoseMoveNext} squares turn received`);
      let newNode = new Node();
      newNode.chessBoardState = chessBoardState;
      newNode.whoseMoveNext = whoseMoveNext;
      newNode.ss = test;
      newNode.movNumber = state.currMovNum;
      if (whoseMoveNext === "white") state.currMovNum += 1;
      state.gameTree.addNode(newNode);
      state.gameTree.printTree(state.gameTree.rootNode);

      console.log(`pushing new node ${newNode}`);
      state.gameHistory.push(newNode);
    },
    dupdateLastNodeAndHistory: (state, payload) => {
      const { node, index } = payload["payload"];
      state.gameTree.lastNode = node;
      state.gameHistory = state.gameHistory.slice(0, index + 1);
      state.value = 1;
    },
    dupdateHistoryAndResetBoard: (state, payload) => {
      const { indexOfGameHistory, linksIndex } = payload["payload"];
      console.log(
        `ffdffd ${indexOfGameHistory} ${linksIndex} ${state.gameHistory[indexOfGameHistory]}`
      );
      let currNode = state.gameHistory[indexOfGameHistory].links[linksIndex];

      state.gameHistory = state.gameHistory.slice(0, indexOfGameHistory + 1);

      state.gameHistory.push(currNode);
      while (
        currNode != undefined &&
        currNode.links != undefined &&
        currNode.links.lenght != 0
      ) {
        state.gameHistory.push(currNode.links[0]);
        currNode = currNode.links[0];
      }
      console.log(state.gameHistory.pop());
      // console.log(state.gameHistory.pop());

      state.value = 1;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addToHistory,
  dupdateTree,
  dupdateLastNodeAndHistory,
  dupdateHistoryAndResetBoard,
} = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
export const selectGameHistory = (state) => state.counter.gameHistory;

export default counterSlice.reducer;
