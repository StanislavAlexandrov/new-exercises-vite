import DATA from '../data/typed-answers.data';
import React, { useEffect, useState } from 'react';
import shuffleArray from '../utils/shuffleArray';
import Picker from './helpers/picker-typed-questions';

let questions = shuffleArray(DATA);

//lambda functions are not re-evaluated in useState; lazy initial state
export default function TypedQuestions() {
    const [currentStep, setCurrentStep] = useState(0);
    const [showPicker, setShowPicker] = useState(true);
    const [numberQuestions, setNumberQuestions] = useState(questions.length);
    let currentQuestion = questions.slice(0, numberQuestions)[currentStep];
    const [currentWord, setCurrentWord] = useState(
        () => currentQuestion.answer
    );
    const [currentGuess, setCurrentGuess] = useState('');
    const [correctGuess, setCorrectGuess] = useState(false);

    useEffect(
        () => setCurrentWord(currentQuestion?.answer),
        [currentStep, numberQuestions, currentQuestion]
    );
    useEffect(() => setCurrentGuess(''), [currentStep]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCorrectGuess(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentStep]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let conditionCheck = currentStep < numberQuestions - 1;
        if (currentWord === currentGuess) {
            if (conditionCheck) {
                setCorrectGuess(true);
                setCurrentStep((x) => ++x);
                setCurrentGuess('');
            } else {
                setCorrectGuess(false);
                setShowPicker(true);
                setCurrentStep(0);
            }
        }
        setCurrentGuess(e.target.value.toLowerCase().trim());
    };

    const checkGuess = () => {
        let conditionCheck = currentStep < numberQuestions - 1;
        if (currentWord === currentGuess) {
            if (conditionCheck) {
                setCurrentStep((x) => ++x);
                setCurrentGuess('');
                setCorrectGuess(true);
            } else {
                setShowPicker(true);
                setCurrentStep(0);
            }
        }
    };

    useEffect(() => {
        checkGuess();
    }, [currentGuess]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSpace = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Space') {
            setCurrentGuess('');
        }
    };

    // Additional State for Revealed Letters and Timer
    const [revealedLetters, setRevealedLetters] = useState('');
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        // Reset revealed letters and timer when question changes
        setRevealedLetters(currentWord[0]);
        setTimer(0);
    }, [currentWord, correctGuess]);

    useEffect(() => {
        // Timer functionality
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 5000);

        // Reveal new letter every 5 seconds
        if (timer > 0 && revealedLetters.length < currentWord.length) {
            setRevealedLetters(
                currentWord.substring(0, revealedLetters.length + 1)
            );
        }

        return () => clearInterval(interval);
    }, [timer, currentWord]);

    return (
        <div>
            {/* <p style={{ color: "red" }}>Maintenance in progress!</p>
      <button
        onClick={() => {
          setNumberQuestions(5);
          setShowPicker(false);
        }}
      >
        5
      </button> */}

            {showPicker ? (
                <Picker
                    setNumberQuestions={setNumberQuestions}
                    showPicker={showPicker}
                    setShowPicker={setShowPicker}
                />
            ) : undefined}

            {!showPicker ? (
                <div className="answers">
                    <h3 className="mt-8">
                        current step: {currentStep + 1} of {numberQuestions}
                    </h3>
                    <h1 className="mt-8 text-2xl font-bold">
                        {questions[currentStep].question}
                        {/* THIS GETS THE FIRST LETTER. TO BE USED IN THE FUTURE */}
                        {/* {"(" + currentWord[0] + "-)"} */}
                    </h1>
                    <input
                        placeholder={
                            revealedLetters +
                            '_'.repeat(
                                currentWord.length - revealedLetters.length
                            )
                        }
                        className="guessInput bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500  w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-8"
                        type="text"
                        value={currentGuess}
                        onChange={handleInput}
                        onKeyDown={handleSpace}
                    />
                    <div className="highlight_right ">
                        <h1 className="bg-green-500 m-auto w-1/3 rounded-md">
                            {correctGuess ? 'correct' : undefined}
                        </h1>
                        <h2 className="text-xl">
                            {correctGuess
                                ? questions[currentStep - 1]?.answer + ': '
                                : undefined}

                            {correctGuess
                                ? questions[currentStep - 1]?.question
                                : undefined}
                        </h2>
                    </div>
                </div>
            ) : undefined}
        </div>
    );
}
