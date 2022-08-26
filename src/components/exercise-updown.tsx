import { useState, useEffect } from 'react';
import wordsDefault from '../data/word-list-updown-default';

export default function UpDown() {
    const [upWords, setUpWords] = useState(wordsDefault);

    const flipItem = (id: number) => {
        setUpWords((wordsDefault) =>
            wordsDefault.map((item) => {
                if (item.id === id + 1) {
                    return {
                        ...item,
                        positionUp: !item.positionUp,
                        used: true,
                    };
                }
                return item;
            })
        );
    };

    const tripleCheck = upWords.filter((element) => element.used === true);

    useEffect(
        () =>
            tripleCheck.length > 2 ? console.log('more') : console.log('less'),
        [upWords, tripleCheck]
    );

    return (
        <div className="flex flex-col items-center justify-center  px-10 ">
            {/* {tripleCheck.length > 2 ? <h1>Please start again.</h1> : null} */}
            <div className="half-height flex items-center">
                <div className=" max-w-md">
                    {upWords.map((element, id) =>
                        !element.positionUp ? (
                            <button
                                key={id}
                                whileTap={{ y: 20 }}
                                id={id}
                                onClick={() => flipItem(id)}
                                className="text-2xl bg-green-200 m-3 rounded-lg p-3 "
                            >
                                {element.word}
                            </button>
                        ) : null
                    )}
                </div>
            </div>
            ...
            <div className="">
                <div className="flex flex-wrap justify-center items-center mt-6 max-w-6xl ">
                    {/* //if it's used then don't show */}
                    {upWords.map((element, id) =>
                        element.positionUp && !element.used ? (
                            <button
                                key={id}
                                id={id}
                                className="bubbly-button text-2xl m-2 rounded-lg    "
                                onClick={() => flipItem(id)}
                            >
                                {element.word}
                            </button>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
}
