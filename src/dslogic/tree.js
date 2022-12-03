export class Node {
  constructor() {
    this.chessBoardState = [[]];
    this.whoseMoveNext = [[]];
    this.winner = "none"; //or "white" or "black"
    this.links = [];
    this.ss = "";
    this.movNumber = 0;
    //king capture condition or king cannot move anywhere condition
    //who won button
  }
}

export class Tree {
  constructor() {
    this.rootNode = new Node();
    this.lastNode = this.rootNode;
  }

  addNode(newNode) {
    this.lastNode.links.push(newNode);
    this.lastNode = newNode;
    this.printTree(this.rootNode);
  }

  printTree(temp) {
    if (
      temp === undefined ||
      temp.links === undefined ||
      temp.links.lenght == 0
    ) {
      return;
    } else {
      // print(temp.chessBoardState)
      temp.links.forEach((i) => {
        this.printTree(i);
      });
    }
  }
}
