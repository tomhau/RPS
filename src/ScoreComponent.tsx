import React from 'react';

interface ScoreComponentProps {
    wins: number;
    draws: number;
    losses: number;
};

const ScoreComponent: React.FC<ScoreComponentProps> = ({ wins, draws, losses }) => {
    return (
        <div>
            <p>Wins: {wins}</p>
            <p>Draws: {draws}</p>
            <p>Losses: {losses}</p>
        </div>
    );
};

export default ScoreComponent;

