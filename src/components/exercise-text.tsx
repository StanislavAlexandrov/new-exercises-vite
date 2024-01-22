import React, { useState } from 'react';
import { useFloating, useHover, useInteractions } from '@floating-ui/react';

type TranslationsType = {
    [key: string]: string;
};

const ExerciseText = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');

    const translations: TranslationsType = {
        hello: 'hola',
        world: 'mundo',
        // ... other words and translations
    };

    const isTranslatableWord = (
        word: string
    ): word is keyof TranslationsType => {
        return word in translations;
    };

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: 'top',
    });

    const hover = useHover(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    const handleMouseEnter = (word: string) => {
        if (isTranslatableWord(word)) {
            setTooltipContent(translations[word]);
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const textWithTranslatableWords = (text: string) => {
        return text.split(' ').map((word, index) => {
            return (
                <span
                    ref={refs.setReference}
                    key={index}
                    {...(isTranslatableWord(word.toLowerCase())
                        ? getReferenceProps({
                              onMouseEnter: () =>
                                  handleMouseEnter(word.toLowerCase()),
                              onMouseLeave: handleMouseLeave,
                          })
                        : {})}
                >
                    {word + ' '}
                </span>
            );
        });
    };
    console.log('floatingStyles', floatingStyles);

    return (
        <>
            <div className="exercise-articles flex flex-col text-3xl m-2 justify-center items-center h-screen w-full">
                <p className="">
                    {textWithTranslatableWords('Hello world and other words.')}
                </p>
                {isOpen && (
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        className="floating bg-cyan-500 w-38 h-12 text-black pointer-events-none"
                        {...getFloatingProps()}
                    >
                        {tooltipContent}
                    </div>
                )}
            </div>
        </>
    );
};

export default ExerciseText;
