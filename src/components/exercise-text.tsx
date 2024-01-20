import React, { useEffect, useState } from 'react';
// import './exercise-articles.scss';
import { v4 as uuidv4 } from 'uuid';

const ExerciseText = () => {
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
        <div className="exercise-articles flex flex-col text-3xl m-2 justify-center items-center h-screen w-full">
            <div className="text-center mx-auto">
                <span className="">
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
                <span className="mt-8">
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
                <div className="flex m-auto mt-8 flex-col">
                    <input
                        type="text"
                        placeholder="enter sentence here"
                        onChange={handleChange}
                        value={myInput}
                        className="myInput bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button onClick={handleClick}>click here</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseText;
