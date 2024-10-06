import React, { useState } from 'react';
import './Game.css';
import Board from './Board';
import { calculateWinner } from '../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        // виявлення кліку чи гра завершена
        if (winner || boardCopy[index]) return;
        // чий хід Х чи 0
        boardCopy[index] = xIsNext ? 'X' : '0';
        // оновлення стейту
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const startNewGame = () => {
        return (
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Очистити поле</button>
        );
    };

    const isDraw = !winner && board.every((square) => square !== null);

    return (
        <div className="wrapper">
            <h1 className='game_info'>
                {winner
                    ? 'Переможець: ' + winner : isDraw ? 'Нічия!' : 'Ходить: ' + (xIsNext ? 'X' : '0')}
            </h1>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
        </div>
    );
}

export default Game;
