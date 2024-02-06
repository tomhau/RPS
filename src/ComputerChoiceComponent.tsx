import React from 'react';
import { Choice } from './models/ChoiceModel';

// Import the icons
import rockIcon from './assets/rock.png';
import paperIcon from './assets/paper.png';
import scissorsIcon from './assets/scissors.png';

interface ComputerChoiceComponentProps {
    computerChoice: Choice | null;
};

const choiceIcons = {
    [Choice.Rock]: rockIcon,
    [Choice.Paper]: paperIcon,
    [Choice.Scissors]: scissorsIcon,
};

const ComputerChoiceComponent: React.FC<ComputerChoiceComponentProps> = ({ computerChoice }) => {
    if (computerChoice === null) {
        return <div>No choice made yet.</div>;
    }

    return (
        <div>
            <div>Computer's choice: {computerChoice}</div>
            <img src={choiceIcons[computerChoice]} alt={computerChoice} width="25" height="25" />
        </div>
    );
};

export default ComputerChoiceComponent;
