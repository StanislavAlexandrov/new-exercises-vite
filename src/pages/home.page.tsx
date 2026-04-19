import { Link } from 'react-router-dom';

const exercises = [
    {
        to: 'articles',
        title: 'Articles',
        desc: 'Spot and remove articles in sentences.',
        accentBar: 'from-sky-500 to-blue-600',
        accentDot: 'bg-sky-500',
        accentText: 'text-sky-700',
    },
    {
        to: 'tobe',
        title: 'To Be',
        desc: 'Quick drills with be-verb questions and answers.',
        accentBar: 'from-indigo-500 to-violet-500',
        accentDot: 'bg-indigo-500',
        accentText: 'text-indigo-700',
    },
    {
        to: 'nounphrases',
        title: 'Noun Phrases',
        desc: 'Image-based prompts for speaking practice.',
        accentBar: 'from-emerald-500 to-teal-500',
        accentDot: 'bg-emerald-500',
        accentText: 'text-emerald-700',
    },
    {
        to: 'tvshows',
        title: 'TV Shows',
        desc: 'Browse shows and react to visual prompts.',
        accentBar: 'from-rose-500 to-pink-500',
        accentDot: 'bg-rose-500',
        accentText: 'text-rose-700',
    },
    {
        to: 'typedquestions',
        title: 'Typed Questions',
        desc: 'Type vocabulary answers with hints.',
        accentBar: 'from-amber-500 to-orange-500',
        accentDot: 'bg-amber-500',
        accentText: 'text-amber-700',
    },
    {
        to: 'updown',
        title: 'Up Down',
        desc: 'Move words between zones as a quick memory game.',
        accentBar: 'from-cyan-500 to-sky-500',
        accentDot: 'bg-cyan-500',
        accentText: 'text-cyan-700',
    },
    {
        to: 'text',
        title: 'Text',
        desc: 'Read a passage with hover translations.',
        accentBar: 'from-fuchsia-500 to-purple-500',
        accentDot: 'bg-fuchsia-500',
        accentText: 'text-fuchsia-700',
    },
];

const HomePage = () => {
    const blockStyle =
        'group relative flex min-h-[168px] flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card';

    return (
        <main className="min-h-[calc(100vh-72px)] bg-canvas bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),_transparent_32%)]">
            <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="max-w-2xl text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                        Something something exercises
                    </p>
                    <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                        Speaking, grammar, and vocabulary exercises
                    </h1>
                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Choose an exercise and jump in.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {exercises.map((exercise) => (
                        <Link
                            key={exercise.to}
                            to={`/${exercise.to}`}
                            className={blockStyle}
                        >
                            <span
                                className={`absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r ${exercise.accentBar}`}
                            />
                            <div className="flex items-center gap-3">
                                <span
                                    className={`h-3 w-3 rounded-full ${exercise.accentDot}`}
                                />
                                <span className="text-xl font-semibold text-slate-900">
                                    {exercise.title}
                                </span>
                            </div>
                            <span className="mt-6 text-sm leading-6 text-slate-600">
                                {exercise.desc}
                            </span>
                            <span
                                className={`mt-6 text-sm font-medium opacity-80 transition group-hover:opacity-100 ${exercise.accentText}`}
                            >
                                Open
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomePage;
