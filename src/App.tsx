import React, {useState} from 'react';
import "./assets/style.scss"
import Score from "./components/Score";
import Game from "./components/Game";
import RulesModal from "./components/RulesModal";
import scissors from "../src/assets/images/icon-scissors.svg";
import paper from "../src/assets/images/icon-paper.svg";
import spock from "../src/assets/images/icon-spock.svg";
import lizard from "../src/assets/images/icon-lizard.svg";
import rock from "../src/assets/images/icon-rock.svg";

export interface Properties {
    id: number;
    type: string;
    url: string;
}

const data: Array<Properties> = ([
    {id: 1, type: "scissors", url: scissors},
    {id: 2, type: "paper", url: paper},
    {id: 3, type: "rock", url: rock},
    {id: 4, type: "lizard", url: lizard},
    {id: 5, type: "spock", url: spock},

])


function App() {

    const [isRulesShown, setIsRulesShown] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    const modalToggle = (): void => {
        setIsRulesShown(prevState => !prevState);
    }

    const updateScore = (user: string, house: string): void => {
        if (user === "paper" && house === "rock") setScore(prevState => prevState + 1)
        else if (user === "paper" && house === "spock") setScore(prevState => prevState + 1)
        else if (user === "scissors" && house === "paper") setScore(prevState => prevState + 1)
        else if (user === "scissors" && house === "lizard") setScore(prevState => prevState + 1)
        else if (user === "rock" && house === "scissors") setScore(prevState => prevState + 1)
        else if (user === "rock" && house === "lizard") setScore(prevState => prevState + 1)
        else if (user === "spock" && house === "scissors") setScore(prevState => prevState + 1)
        else if (user === "spock" && house === "rock") setScore(prevState => prevState + 1)
        else if (user === "lizard" && house === "spock") setScore(prevState => prevState + 1)
        else if (user === "lizard" && house === "paper") setScore(prevState => prevState + 1)
        else if (house === "paper" && user === "rock") setScore(prevState => prevState - 1)
        else if (house === "paper" && user === "spock") setScore(prevState => prevState - 1)
        else if (house === "scissors" && user === "paper") setScore(prevState => prevState - 1)
        else if (house === "scissors" && user === "lizard") setScore(prevState => prevState - 1)
        else if (house === "rock" && user === "scissors") setScore(prevState => prevState - 1)
        else if (house === "rock" && user === "lizard") setScore(prevState => prevState - 1)
        else if (house === "spock" && user === "scissors") setScore(prevState => prevState - 1)
        else if (house === "spock" && user === "rock") setScore(prevState => prevState - 1)
        else if (house === "lizard" && user === "spock") setScore(prevState => prevState - 1)
        else if (house === "lizard" && user === "paper") setScore(prevState => prevState - 1)
    }


    return (
        <>
            {isRulesShown && <RulesModal onClose={modalToggle}/>}
            <div className="container">
                <Score score={score}/>
                <Game data={data} updateScore={updateScore}/>
                <div className="rules__btn__container">
                    <button className="rules__btn" onClick={modalToggle}>
                        rules
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
