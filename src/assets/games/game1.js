import Bishop from "../../pieces/bishop";
import King from "../../pieces/king";
import Knight from "../../pieces/knight";
import Pawn from "../../pieces/pawn";
import Queen from "../../pieces/queen";
import Rook from "../../pieces/rook";

export default function initialiseChessBoard1() {
  const squares = Array(64).fill(null);

  squares[0] = new Rook(2);
  squares[3] = new Queen(2);
  squares[4] = new King(2);
  squares[7] = new Rook(2);
  squares[8] = new Pawn(2);
  squares[9] = new Bishop(2);
  squares[14] = new Pawn(2);
  squares[15] = new Pawn(2);
  squares[17] = new Knight(2);
  squares[20] = new Pawn(1);
  squares[21] = new Bishop(2);
  squares[26] = new Bishop(1);
  squares[29] = new Queen(1);
  squares[32] = new Pawn(2);
  squares[34] = new Pawn(2);
  squares[42] = new Pawn(1);
  squares[50] = new Bishop(1);
  squares[53] = new Pawn(1);
  squares[54] = new Pawn(1);
  squares[55] = new Pawn(1);
  squares[56] = new Rook(1);
  squares[57] = new Knight(1);
  squares[60] = new Rook(1);
  squares[62] = new King(1);

  return squares;
}
