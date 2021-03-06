import './App.css';
import Rock from './Rock.js';
import Paper from './Paper.js';
import Scissors from './Scissors.js';
import { useState, useEffect } from 'react';

const choices = [
    {
        id: 1,
        name: 'rock',
        component: Rock,
        losesTo: 2,
    },
    {
        id: 2,
        name: 'paper',
        component: Paper,
        losesTo: 3,
    },
    {
        id: 3,
        name: 'scissors',
        component: Scissors,
        losesTo: 1,
    },
];

function App() {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        restartGame();
    }, []);

    function restartGame() {
        setGameState(null);
        setUserChoice(null);
        const randomChoice =
            choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }

    function handleUserChoice(choice) {
        const chosenChoice = choices.find(c => c.id === choice);
        setUserChoice(chosenChoice);

        if (chosenChoice.losesTo === computerChoice.id) {
            setGameState('lose');
            setLosses(losses => losses + 1);
        } else if (computerChoice.losesTo === chosenChoice.id) {
            setGameState('win');
            setWins(wins => wins + 1);
        } else if (chosenChoice.id === computerChoice.id) {
            setGameState('draw');
        }
    }

    function renderedComponent(choice) {
        const Component = choice.component;
        return <Component />;
    }

    return (
        <div className='app'>
            <div className='info'>
                <h2>Rock. Paper. Scissors</h2>
                <div className='wins-losses'>
                    <div className='wins'>
                        <span className='number'>{wins}</span>
                        <span className='text'>
                            {wins === 1 ? 'Win' : 'Wins'}
                        </span>
                    </div>
                    <div className='losses'>
                        <span className='number'>{losses}</span>
                        <span className='text'>
                            {losses === 1 ? 'Loss' : 'Losses'}
                        </span>
                    </div>
                </div>
            </div>
            {/* the popup to show win/loss/draw */}

            {gameState && (
                <div
                    className={`game-state ${gameState}`}
                    onClick={restartGame}
                >
                    <div>
                        <div className='game-state-content'>
                            <p>{renderedComponent(userChoice)}</p>

                            {gameState === 'win' && <p>You win!</p>}
                            {gameState === 'lose' && <p>You lost!</p>}
                            {gameState === 'draw' && <p>It's a draw!</p>}

                            <p>{renderedComponent(computerChoice)}</p>
                        </div>
                        <button onClick={restartGame}>Play Again</button>
                    </div>
                </div>
            )}
            <div className='choices'>
                {/* choices captions */}
                <div>You</div>
                <div />
                <div>Computer</div>

                {/* buttons for my choice */}
                <div>
                    <button
                        className='rock'
                        onClick={() => handleUserChoice(1)}
                    >
                        <Rock />
                    </button>
                    <button
                        className='paper'
                        onClick={() => handleUserChoice(2)}
                    >
                        <Paper />
                    </button>
                    <button
                        className='scissors'
                        onClick={() => handleUserChoice(3)}
                    >
                        <Scissors />
                    </button>
                </div>

                <div className='vs'>vs</div>

                {/* show the computer's choice */}
                <div>
                    <button className='computer-choice'>?</button>
                </div>
            </div>
        </div>
    );
}

export default App;
