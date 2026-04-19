import { useMemo, useState } from 'react';

const ARTICLE_PATTERN = /\b(a|an|the)\b/i;

const normalizeToken = (token: string) =>
    token.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '');

const isArticleToken = (token: string) =>
    ARTICLE_PATTERN.test(normalizeToken(token));

const removeArticlesFromSentence = (value: string) =>
    value
        .replace(/\b(a|an|the)\b\s*/gi, '')
        .replace(/\s+([.,!?;:])/g, '$1')
        .replace(/\(\s+/g, '(')
        .replace(/\s+\)/g, ')')
        .replace(/\s{2,}/g, ' ')
        .trim();

const ExerciseArticles = () => {
    const [sentence, setSentence] = useState(
        'He was having a beautiful day. The sun was shining and the birds were chirping.',
    );
    const [draft, setDraft] = useState(sentence);
    const [showAnswer, setShowAnswer] = useState(false);

    const answerTokens = useMemo(() => sentence.split(/(\s+)/), [sentence]);
    const practiceSentence = useMemo(
        () => removeArticlesFromSentence(sentence),
        [sentence],
    );
    const removedArticlesCount = useMemo(
        () => answerTokens.filter((token) => isArticleToken(token)).length,
        [answerTokens],
    );

    const handleUpdateSentence = () => {
        const nextSentence = draft.trim();
        if (!nextSentence) {
            return;
        }

        setSentence(nextSentence);
        setDraft(nextSentence);
        setShowAnswer(false);
    };

    return (
        <main className="min-h-[calc(100vh-72px)] bg-canvas px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-4xl flex-col rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                    Articles exercise
                </p>
                <h1 className="mt-4 text-center text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Read the sentence without articles and restore them mentally
                </h1>
                <p className="mt-4 text-center text-base leading-7 text-slate-600">
                    The student sees the sentence with every{' '}
                    <span className="font-semibold text-slate-800">
                        a / an / the
                    </span>{' '}
                    removed, then decides where an article belongs and where no
                    article is needed.
                </p>

                <div className="mt-10 rounded-[28px] border border-amber-200 bg-amber-50/70 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">
                        Articles missing
                    </p>
                    <p className="mt-4 whitespace-pre-wrap text-2xl leading-relaxed text-slate-900 sm:text-3xl">
                        {practiceSentence}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
                    <span>
                        Removed {removedArticlesCount} article
                        {removedArticlesCount === 1 ? '' : 's'} from this
                        sentence.
                    </span>
                    <button
                        onClick={() => setShowAnswer((current) => !current)}
                        className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-white px-4 py-2 font-semibold text-amber-700 transition hover:border-amber-400 hover:bg-amber-100"
                    >
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                </div>

                {showAnswer ? (
                    <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Answer
                        </p>
                        <p className="mt-4 whitespace-pre-wrap text-2xl leading-relaxed text-slate-900 sm:text-3xl">
                            {answerTokens.map((token, index) =>
                                isArticleToken(token) ? (
                                    <span
                                        key={`${token}-${index}`}
                                        className="rounded-md bg-amber-100 px-2 py-1 text-amber-900"
                                    >
                                        {token}
                                    </span>
                                ) : (
                                    <span key={`${token}-${index}`}>
                                        {token}
                                    </span>
                                ),
                            )}
                        </p>
                    </div>
                ) : null}

                <div className="mt-10 border-t border-slate-200 pt-8">
                    <label
                        htmlFor="articles-sentence"
                        className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500"
                    >
                        Use your own sentence
                    </label>
                    <textarea
                        id="articles-sentence"
                        rows={4}
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        className="mt-3 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                    />
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-slate-500">
                            Paste any sentence and the exercise will remove the
                            articles it recognizes.
                        </p>
                        <button
                            onClick={handleUpdateSentence}
                            className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                        >
                            Update exercise
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExerciseArticles;
