import React from 'react';
import { Square, SquareValue } from '../Square';
import styles from './board.module.css';

interface IBoardProps {
  squares: TSquares;
  // xIsNext: boolean;
  onClick: (i: number) => void;
}

interface IBoardState {}

export type TSquares = Array<SquareValue>;

export class Board extends React.Component<IBoardProps, IBoardState> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
