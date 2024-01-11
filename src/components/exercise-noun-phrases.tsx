import React from 'react';
// just make it .ts instead of json
// import './exercise-noun-phrases.scss';
import PICS from '../data/noun-phrases-img-list.json';
//provide generic type inside the method (e.g. axios.get has to be provided with a generic -
// what data do you want to get)
//declare this particular type if the name is unique
// generic function getPictures - initially returns something, but if it's provided

import { useState } from 'react';

let counter = 1;

interface myPicsInterface {
    [key: string]: string;
}

const myPics: Record<string, string> = PICS;
//list of images somewhere is the best solution
//update the list in json
//fs function in node.js before you start your app
//import images.data.json
//it's a list of urls

//TODO: for next use fs function - look into this
//initial props function in next
function ExerciseNounPhrases() {
    const [picLink, setPicLink] = useState(myPics[Object.keys(myPics)[0]]);

    function nextPicClick() {
        if (counter < Object.keys(myPics).length) {
            setPicLink(myPics[Object.keys(myPics)[counter]]);
            counter++;
        } else {
            counter = 1;
            setPicLink(myPics[Object.keys(myPics)[0]]);
        }
    }

    return (
        <>
            <div className="allPictures flex flex-col items-center justify-center h-screen">
                <img
                    src={picLink}
                    className="cursor-pointer pictureShown img-fluid mx-auto d-block rounded"
                    alt="noun phrase exercise"
                    onClick={nextPicClick}
                ></img>

                <button
                    id="nextPicButton"
                    onClick={nextPicClick}
                    className="btn btn-success btn-lg"
                >
                    next
                </button>
                <div>
                    {counter} of {Object.keys(PICS).length}
                </div>
            </div>
        </>
    );
}

export default ExerciseNounPhrases;
