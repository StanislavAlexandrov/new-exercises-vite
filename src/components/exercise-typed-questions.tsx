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
                <>
                    <h3>
                        current step: {currentStep + 1} of {numberQuestions}
                    </h3>
                    <h1>
                        {questions[currentStep].question}
                        {/* THIS GETS THE FIRST LETTER. TO BE USED IN THE FUTURE */}
                        {/* {"(" + currentWord[0] + "-)"} */}
                    </h1>
                    <input
                        className="guessInput  text-gray-700 text-sm font-bold mb-2"
                        type="text"
                        value={currentGuess}
                        onChange={handleInput}
                        onKeyDown={handleSpace}
                    />
                    <div className="highlight_right">
                        <h1>{correctGuess ? 'correct' : undefined}</h1>
                        <h2>
                            {correctGuess
                                ? questions[currentStep - 1]?.answer + ': '
                                : undefined}

                            {correctGuess
                                ? questions[currentStep - 1]?.question
                                : undefined}
                        </h2>
                    </div>
                </>
            ) : undefined}
        </div>
    );
}
