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
        () => currentQuestion.answer,
    );
    const [currentGuess, setCurrentGuess] = useState('');
    const [correctGuess, setCorrectGuess] = useState(false);

    useEffect(
        () => setCurrentWord(currentQuestion?.answer),
        [currentStep, numberQuestions, currentQuestion],
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
                currentWord.substring(0, revealedLetters.length + 1),
            );
        }

        return () => clearInterval(interval);
    }, [timer, currentWord]);

    return (
        <main className="min-h-[calc(100vh-72px)] bg-canvas px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                {showPicker ? (
                    <Picker
                        setNumberQuestions={setNumberQuestions}
                        showPicker={showPicker}
                        setShowPicker={setShowPicker}
                    />
                ) : null}

                {!showPicker ? (
                    <div className="w-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Question {currentStep + 1} of {numberQuestions}
                        </h3>

                        <h1 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
                            {questions[currentStep].question}
                        </h1>

                        <input
                            placeholder={
                                revealedLetters +
                                '_'.repeat(
                                    currentWord.length - revealedLetters.length,
                                )
                            }
                            className="mx-auto mt-6 block w-full max-w-md rounded-xl border border-slate-300 bg-white p-3 text-lg text-slate-900 outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100"
                            type="text"
                            value={currentGuess}
                            onChange={handleInput}
                            onKeyDown={handleSpace}
                        />

                        <div className="mt-6 flex flex-col items-center gap-3">
                            <h2 className="min-h-[2.5rem] rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                                {correctGuess ? 'Correct' : ''}
                            </h2>

                            <p className="text-base text-slate-600">
                                {correctGuess
                                    ? `${questions[currentStep - 1]?.answer}: ${questions[currentStep - 1]?.question}`
                                    : ''}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </main>
    );
}
