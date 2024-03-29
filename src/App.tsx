import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link, HashRouter as Router } from 'react-router-dom';
import HomePage from './pages/home.page';
import ExerciseArticles from './components/exercise-articles';
import ExerciseToBe from './components/exercise-tobe';
import ExerciseNounPhrases from './components/exercise-noun-phrases';
import TvShows from './components/exercise-tvmaze';
import TypedQuestions from './components/exercise-typed-questions';
import UpDown from './components/exercise-updown';
import ExerciseText from './components/exercise-text';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/articles" element={<ExerciseArticles />} />
                    <Route path="/tobe" element={<ExerciseToBe />} />
                    <Route
                        path="/nounphrases"
                        element={<ExerciseNounPhrases />}
                    />
                    <Route path="/tvshows" element={<TvShows />}></Route>
                    <Route
                        path="/typedquestions"
                        element={<TypedQuestions />}
                    ></Route>
                    <Route path="/updown" element={<UpDown />}></Route>
                    <Route path="/text" element={<ExerciseText />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
