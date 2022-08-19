import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ExerciseArticles from './components/exercise-articles';
import ExerciseToBe from './components/exercise-tobe';
import ExerciseNounPhrases from './components/exercise-noun-phrases';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home />}></Route> */}
                    <Route path="/articles" element={<ExerciseArticles />} />
                    <Route path="/tobe" element={<ExerciseToBe />} />
                    <Route
                        path="/nounphrases"
                        element={<ExerciseNounPhrases />}
                    />
                </Routes>
            </Router>

            <h1>Home</h1>
        </div>
    );
}

export default App;
