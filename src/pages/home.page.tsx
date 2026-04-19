import { Link } from 'react-router-dom';

const exercises = [
    {
        to: 'articles',
        title: 'Articles',
        desc: 'Spot and remove articles in sentences.',
    },
    {
        to: 'tobe',
        title: 'To Be',
        desc: 'Quick drills with be-verb questions and answers.',
    },
    {
        to: 'nounphrases',
        title: 'Noun Phrases',
        desc: 'Image-based prompts for speaking practice.',
    },
    {
        to: 'tvshows',
        title: 'TV Shows',
        desc: 'Browse shows and react to visual prompts.',
    },
    {
        to: 'typedquestions',
        title: 'Typed Questions',
        desc: 'Type vocabulary answers with hints.',
    },
    {
        to: 'updown',
        title: 'Up Down',
        desc: 'Move words between zones as a quick memory game.',
    },
    {
        to: 'text',
        title: 'Text',
        desc: 'Read a passage with hover translations.',
    },
];

const HomePage = () => {
    const blockStyle =
        'group flex min-h-[180px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card';

    return (
        <main className="min-h-[calc(100vh-72px)] bg-canvas">
            <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="max-w-2xl text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                        Something something exercises
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
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
                            to={exercise.to}
                            className={blockStyle}
                        >
                            <span className="text-lg font-semibold text-slate-900">
                                {exercise.title}
                            </span>
                            <span className="mt-2 text-sm leading-6 text-slate-600">
                                {exercise.desc}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomePage;
