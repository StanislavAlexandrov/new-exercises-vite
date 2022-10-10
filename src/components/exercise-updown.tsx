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
        <div className="h-screen bg-green-100 flex flex-col ">
            {/* {tripleCheck.length > 2 ? <h1>Please start again.</h1> : null} */}
            <div className="bg-red-50 h-1/2 w-[100%] md:w-screen flex justify-center items-center">
                <div className=" flex-wrap w-1/2  ">
                    {upWords.map((element, id) =>
                        !element.positionUp ? (
                            <button
                                key={id}
                                id={id.toString()}
                                onClick={() => flipItem(id)}
                                className="text-2xl m-2 p-2 bg-blue-500 text-white rounded-full"
                            >
                                {element.word}
                            </button>
                        ) : null
                    )}
                </div>
            </div>

            <div className="bg-yellow-50 h-1/2">
                <div className="">
                    {/* //if it's used then don't show */}
                    {/* //the TS issue is that I need to extend the react button type*/}
                    {upWords.map((element, id) =>
                        element.positionUp && !element.used ? (
                            <button
                                key={id}
                                id={id.toString()}
                                className=" m-2  bg-pink-200 p-2 rounded-full "
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
