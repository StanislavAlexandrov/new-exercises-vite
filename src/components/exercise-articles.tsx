import React, { useEffect, useState } from 'react';
// import './exercise-articles.scss';
import { v4 as uuidv4 } from 'uuid';

const ExerciseArticles = () => {
    const [sentence, setSentence] = useState(
        'He was having a beautiful day. The sun was shining and the birds were chirping. '
    );
    const [myInput, setMyInput] = useState('');
    const [newSentence, setNewSentence] = useState(
        sentence.replace(/[^A-Za-z0-9-.\s]+/, '').split(' ')
    );

    useEffect(
        () =>
            setNewSentence(
                sentence.replace(/[^A-Za-z0-9-.\s]+/, '').split(' ')
            ),
        [sentence]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyInput(e.target.value);
    };

    const handleClick = () => {
        setSentence(myInput);
        setMyInput('');
    };

    return (
        <div className="exercise-articles">
            <span>
                {newSentence?.map((word) =>
                    word === 'a' ||
                    word === 'the' ||
                    word === 'A' ||
                    word === 'The' ? (
                        <span key={uuidv4()}>
                            <span
                                style={{ background: 'yellow' }}
                                key={uuidv4()}
                            >
                                {word}
                            </span>{' '}
                        </span>
                    ) : (
                        <span key={uuidv4()}>{word} </span>
                    )
                )}
            </span>
            <span>
                {newSentence?.map((word) =>
                    word === 'a' ||
                    word === 'the' ||
                    word === 'A' ||
                    word === 'The' ? (
                        <span key={uuidv4()}>
                            <span key={uuidv4()}>{null}</span>{' '}
                        </span>
                    ) : (
                        <span key={uuidv4()}>{word} </span>
                    )
                )}
            </span>
            <div>
                <input
                    type="text"
                    placeholder="enter sentence here"
                    onChange={handleChange}
                    value={myInput}
                    className="myInput"
                />
                <button onClick={handleClick}>click here</button>
            </div>
        </div>
    );
};

export default ExerciseArticles;
