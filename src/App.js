import './App.css';
import Rock from './Rock.js';
import Paper from './Paper.js';
import Scissors from './Scissors.js';
import { useState, useEffect } from 'react';
import { rand } from 'elliptic';

const choices = [
    {
        id: 1,
        name: 'rock',
        icon: Rock,
    },
    {
        id: 2,
        name: 'paper',
        icon: Paper,
    },
    {
        id: 3,
        name: 'scissors',
        icon: Scissors,
    },
];

function App() {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);

    useEffect(() => {
        const randomChoice =
            choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }, []);

    function handleUserChoice(choice) {
        const chosenChoice = choices.find(c => c.id === choice);
        setUserChoice(chosenChoice);
    }

    return (
        <div className='app'>
            <div className='info'>
                <h2>Rock. Paper. Scissors</h2>
                <div className='wins-losses'>
                    <div className='wins'>
                        <span className='number'>{wins}</span>
                        <span className='text'>Wins</span>
                    </div>
                    <div className='losses'>
                        <span className='number'>{losses}</span>
                        <span className='text'>Losses</span>
                    </div>
                </div>
            </div>
            {/* the popup to show win/loss/draw */}
            {/* <div className="game-state"></div> */}

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
