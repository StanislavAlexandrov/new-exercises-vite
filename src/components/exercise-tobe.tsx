import React, { useState, useEffect } from 'react';
// import './exercise-tobe.component.scss';
import questionListToBe from '../data/question-list-tobe.data';

let intervalId: number;

function ExerciseToBe() {
    let [count, setCount] = useState(100);

    if (count === questionListToBe.length) {
        window.clearInterval(intervalId);
    }

    useEffect(() => {
        return () => window.clearInterval(intervalId);
    }, []);

    const restartTimer = () => {
        if (count !== 0 && count < questionListToBe.length) {
            return;
        }
        setCount(0);
        intervalId = window.setInterval(() => {
            setCount((i) => {
                return ++i;
            });
        }, 1800);
    };

    return (
        <div className="exerciseToBe flex justify-center text-3xl items-center h-screen">
            <div>
                {count < questionListToBe.length ? null : (
                    <button onClick={restartTimer}>Start</button>
                )}
            </div>

            <div className="showSentenceTimed">
                {count === 100 ? '...' : questionListToBe[count]}
            </div>
        </div>
    );
}

export default ExerciseToBe;
