import React, { useState } from 'react';
import rockIcon from './assets/rock.png';
import paperIcon from './assets/paper.png';
import scissorsIcon from './assets/scissors.png';
import ComputerChoiceComponent from './ComputerChoiceComponent';
import ScoreComponent from './ScoreComponent';

// Importing the models..
import { Choice } from './models/ChoiceModel';
import { GameStatus } from './models/GameStatusModel';

const choiceIcons = {
    [Choice.Rock]: rockIcon,
    [Choice.Paper]: paperIcon,
    [Choice.Scissors]: scissorsIcon,
};

const gameStatus = new GameStatus();

const GameComponent: React.FC = () => {

    
    const [userChoice, setUserChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string>('');
    
    function getRandomChoice(): Choice {
        const choices = Object.values(Choice);
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice: Choice, computerChoice: Choice): string {
        if (userChoice === computerChoice) {
            gameStatus.recordDraw();
            return 'It\'s a draw!';
        }
        if ((userChoice === Choice.Rock && computerChoice === Choice.Scissors) ||
            (userChoice === Choice.Scissors && computerChoice === Choice.Paper) ||
            (userChoice === Choice.Paper && computerChoice === Choice.Rock)) {
            gameStatus.recordWin();   
            return 'You win!';
        }
        gameStatus.recordLoss();
        return 'You lose!';
    }

    function onChoiceClick(choice: Choice) {
        const computerChoice = getRandomChoice();
        const gameResult = determineWinner(choice, computerChoice);

        setUserChoice(choice);
        setComputerChoice(computerChoice);
        setResult(gameResult);
    }

    return (
        <div>
            <div>
                {Object.values(Choice).map((choice) => (
                    <button key={choice} onClick={() => onChoiceClick(choice)}>
                        <img src={choiceIcons[choice]} alt={choice} width="25" height="25" />
                    </button>
                ))}
            </div>
        
            {userChoice && <div>Your choice: {userChoice}</div>}
            <ComputerChoiceComponent computerChoice={computerChoice} /> 
           
         {result && <div>{result}</div>}
         <ScoreComponent wins={gameStatus.wins} draws={gameStatus.draws} losses={gameStatus.losses} />
        </div>
    );
};
export default GameComponent;
