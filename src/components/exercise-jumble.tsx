import React, { useState } from 'react';
// import './exercise-articles.scss';

const ExerciseJumble = () => {
    const [myInput, setMyInput] = useState('');
    //why do we need HTMLInputElement here?
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyInput(event.target.value);
    };

    function shuffle(array: string[]) {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    function sentenceToArray(sentence: string) {
        console.log(sentence.split(' '));
        return sentence.split(' ');
    }

    const sentenceJumbler = (sentence: string) => {
        let readySentence = shuffle(sentenceToArray(sentence));

        return readySentence.map((element, i) => (
            <span key={i}>{element} </span>
        ));
    };

    return (
        <div className="exercise-articles">
            <span>{sentenceJumbler(myInput)}</span>

            <div>
                <input
                    type="text"
                    placeholder="enter sentence here"
                    onChange={handleChange}
                    value={myInput}
                    className="myInput"
                />
            </div>
        </div>
    );
};

export default ExerciseJumble;
