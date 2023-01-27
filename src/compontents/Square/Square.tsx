import React from 'react';
import styles from './square.module.css';

export type SquareValue = 'X' | 'O' | null;

interface ISquareProps {
  value: SquareValue;
  onClick: () => void;
}

interface ISquareState {
  value: SquareValue;
}

export class Square extends React.Component<ISquareProps, ISquareState> {
  constructor(props: ISquareProps) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
