import './App.css';
import Rock from './Rock.js';
import Paper from './Paper.js';
import Scissors from './Scissors.js';

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
    return (
        <div className='app'>
            <div className='info'>
                <h2>Rock. Paper. Scissors</h2>
                <div className='wins-losses'>
                    <div className='wins'>
                        <span className='number'>0</span>
                        <span className='text'>Wins</span>
                    </div>
                    <div className='losses'>
                        <span className='number'>0</span>
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
                    <button className='rock'>
                        <Rock />
                    </button>
                    <button className='paper'>
                        <Paper />
                    </button>
                    <button className='scissors'>
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
