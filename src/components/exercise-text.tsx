import React, { useState } from 'react';

type TranslationsType = {
    [key: string]: string;
};

const ExerciseText = () => {
    const [tooltipContent, setTooltipContent] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    const translations: TranslationsType = {
        cohesiveness: 'целостность, связность',
        cohesion: 'целостность, связность',
        peculiarly: 'отличительно',
        bonded: 'связали',
        monolithic: 'единый',
        entity: 'объект',
        bonds: 'связи',
        garrison: 'гарнизон, корпус',
        stationed: 'расквартированный',
        enforced: 'cледили за соблюдением',
        conduct: 'поведение',
        utterly: 'полностью',
        obsession: 'одержимость',
        lain: 'заложена',
        whereas: 'в то время как',
        scores: 'десятки',
        scattered: 'разбросанный',
        while: 'в то время как',
    };

    const isTranslatableWord = (
        word: string | number
    ): word is keyof TranslationsType => {
        return word in translations;
    };

    const handleMouseEnter = (word: string) => {
        if (isTranslatableWord(word)) {
            setTooltipContent(translations[word]);
            setShowTooltip(true);
        }
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const textWithTranslatableWords = (text: string) => {
        return text.split(' ').map((word, index) => {
            return (
                <span
                    key={index}
                    onMouseEnter={() => handleMouseEnter(word.toLowerCase())}
                    onMouseLeave={handleMouseLeave}
                    className={
                        isTranslatableWord(word.toLowerCase())
                            ? 'translatable-word'
                            : ''
                    }
                >
                    {word + ' '}
                </span>
            );
        });
    };

    return (
        <>
            <div className="exercise-articles flex flex-col text-3xl m-2 justify-center items-center h-screen w-full">
                <p>
                    {textWithTranslatableWords(
                        '1. There is a quality of cohesiveness about the Roman world that applied neither to Greece nor perhaps to any other civilization, ancient or modern. Like the stones of a Roman wall, which were held together both by the regularity of the design and by that peculiarly powerful Roman cement, so the various parts of the Roman realm were bonded into a massive, monolithic entity by physical, organizational, and psychological controls. The physical bonds included the network of military garrisons, which were stationed in every province, and the network of stone-built roads that linked the provinces with Rome. The organizational bonds were based on the common principles of law and administration and on the universal army of officials who enforced common standards of conduct. The psychological controls were built on fear and punishment—on the absolute certainty that anyone or anything that threatened the authority of Rome would be utterly destroyed. 2. The source of the Roman obsession with unity and cohesion may well have lain in the pattern of Rome’s early development. Whereas Greece had grown from scores of scattered cities, Rome grew from one single organism. While the Greek world had expanded along the Mediterranean Sea lanes, the Roman world was assembled by territorial conquest. Of course, the contrast is not quite so stark: in Alexander the Great the Greeks had found the greatest territorial conqueror of all time; and the Romans, once they moved outside Italy, did not fail to learn the lessons of sea power. Yet the essential difference is undeniable. The key to the Greek world lay in its high-powered ships; the key to Roman power lay in its marching legions. The Greeks were wedded to the sea; the Romans, to the land. The Greek was a sailor at heart; the Roman, a landsman. 3. Certainly, in trying to explain the Roman phenomenon, one would have to place great emphasis on this almost animal instinct for the territorial imperative. Roman priorities lay in the organization, exploitation, and defense of their territory. In all probability it was the fertile plain of Latium, where the Latins who founded Rome originated, that created the habits and skills of landed settlement, landed property, landed economy, landed administration, and a land-based society. From this arose the Roman genius for military organization and orderly government. In turn, a deep attachment to the land, and to the stability which rural life engenders, fostered the Roman virtues: gravitas, a sense of responsibility, peitas, a sense of devotion to family and country, and iustitia, a sense of the natural order.'
                    )}
                </p>
                {showTooltip && <div className="tooltip">{tooltipContent}</div>}
            </div>

            <style jsx>{`
                .translatable-word:hover {
                    background-color: #f0f0f0; /* Highlighting the word on hover */
                    cursor: pointer;
                }
                .tooltip {
                    position: absolute;
                    background-color: cyan;
                    color: black;
                    padding: 8px;
                    border-radius: 4px;
                    /* Adjust more styling as needed */
                }
            `}</style>
        </>
    );
};

export default ExerciseText;
