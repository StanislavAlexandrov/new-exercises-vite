import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useScrollDirection from './custom-hooks/use-scroll-direction';

const navLinks = [
    ['/', 'Home'],
    ['/articles', 'Articles'],
    ['/tobe', 'To Be'],
    ['/nounphrases', 'Noun Phrases'],
    ['/tvshows', 'TV Shows'],
    ['/typedquestions', 'Typed Questions'],
    ['/updown', 'Up Down'],
    ['/text', 'Text'],
] as const;

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
                            Tailwind Exercises
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
                        <ul
                            className={`w-full flex-col gap-2 pt-4 ${
                                navbarOpen ? 'flex' : 'hidden'
                            } lg:ml-auto lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:pt-0`}
                        >
                            {navLinks.map(([to, label]) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        end={to === '/'}
                                        className={({ isActive }) =>
                                            `inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                                                isActive
                                                    ? 'bg-brand-600 text-white shadow-sm'
                                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                            }`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
