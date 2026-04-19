import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollDirection from './custom-hooks/use-scroll-direction';
export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const scrollDirection = useScrollDirection();
    return (
        <>
            <nav
                className={`sticky ${
                    scrollDirection === 'down' ? '-top-24' : 'top-0'
                } flex flex-wrap items-center justify-between border-b border-slate-200 bg-white/90 transition-all duration-300 backdrop-blur`}
            >
                {/* navBar without useScrollDirection hook */}
                {/* <nav className=" flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 sticky top-0"> */}
                <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-700"
                            to="/"
                        >
                            href="#exercises" Tailwind Exercises
                        </Link>
                        <button
                            className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col gap-2 pt-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-1 lg:pt-0">
                            <Link className="nav-item" to="/">
                                <ul className="flex flex-col gap-2 pt-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-1 lg:pt-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>{' '}
                                    HOME
                                </ul>
                            </Link>
                            <Link
                                to="articles"
                                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
                            >
                                ARTICLES
                            </Link>
                            <Link
                                to="tobe"
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                TOBE
                            </Link>
                            <Link
                                to="nounphrases"
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                NOUN PHRASES
                            </Link>
                            <Link
                                to="tvshows"
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                TV SHOWS
                            </Link>
                            <Link
                                to="typedquestions"
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                TYPED QUESTIONS
                            </Link>
                            <Link
                                to="updown"
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                UP DOWN
                            </Link>
                            <Link
                                to="text"
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                TEXT
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
