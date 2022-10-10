import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const blockStyle =
        'border-solid border-2 p-5 bg-white rounded-lg flex justify-center relative';

    return (
        <div className="">
            <div className="bg-gray-100 min-h-screen flex items-center justify-center px-16">
                <div className="w-full max-w-md relative">
                    <div className="absolute top-0 -left-2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 -right-2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <Link to="articles" className={blockStyle}>
                        <a className=" px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 ">
                            ARTICLES
                        </a>
                    </Link>
                    <Link to="tobe" className={blockStyle}>
                        <a className=" px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                            TOBE
                        </a>
                    </Link>
                    <Link to="nounphrases" className={blockStyle}>
                        <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                            NOUN PHRASES
                        </a>
                    </Link>
                    <Link to="tvshows" className={blockStyle}>
                        <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                            TV SHOWS
                        </a>
                    </Link>
                    <Link to="typedquestions" className={blockStyle}>
                        <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                            TYPED QUESTIONS
                        </a>
                    </Link>
                    <Link to="updown" className={blockStyle}>
                        <a className="px-3 py-2  items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                            UP DOWN
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
