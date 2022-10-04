import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex justify-center flex-col p-16">
            <h1 className="text-3xl font-bold ">Home</h1>

            <div className=" grid grid-cols-3  gap-4 justify-center h-96 items-center ">
                <Link to="articles" className="border-solid border-2">
                    <a className=" px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 ">
                        ARTICLES
                    </a>
                </Link>
                <Link to="tobe" className="border-solid border-2">
                    <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                        TOBE
                    </a>
                </Link>
                <Link to="nounphrases" className="border-solid border-2">
                    <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                        NOUN PHRASES
                    </a>
                </Link>
                <Link to="tvshows" className="border-solid border-2">
                    <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                        TV SHOWS
                    </a>
                </Link>
                <Link to="typedquestions" className="border-solid border-2">
                    <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                        TYPED QUESTIONS
                    </a>
                </Link>
                <Link to="updown" className="border-solid border-2">
                    <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                        UP DOWN
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
