import { useState, useEffect } from 'react';
import shuffleArray from '../utils/shuffleArray';

export default function TvShows() {
    //? otherwise it gets assigned to 'never'?

    //basically if you don't set it to something
    //you can't map on an empty array according to TS
    const [schedule, setSchedule] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
            .then((data) => data.json())
            .then((data) => setSchedule(shuffleArray(data)))
            .then(() => setIsLoading(false))
            .catch(() => setIsError(true));
    }, []);

    return (
        <div>
            {isLoading ? <h1>Loading...</h1> : null}
            {isError ? <h1>Error loading the source</h1> : null}
            <div className="wrapper flex flex-wrap  m-auto md:w-1/2">
                {schedule.map((element) => (
                    <div className="tvShow flex-[1_1_25%] m-1" key={element.id}>
                        <h2>{element.name}</h2>
                        <a href={element.url} target="_blank" rel="noreferrer">
                            <img
                                src={element.image.medium}
                                loading="lazy"
                                alt={element.name}
                            ></img>
                        </a>

                        {/* <p>{element.summary}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
