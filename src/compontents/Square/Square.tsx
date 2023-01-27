import React, { useState } from 'react';
import styles from './square.module.css';

export type SquareValue = 'X' | 'O' | null;

interface ISquareProps {
  value: SquareValue;
  onClick: () => void;
}

export function Square({ value, onClick }: ISquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
