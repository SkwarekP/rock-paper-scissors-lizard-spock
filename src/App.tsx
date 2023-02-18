import {useState} from 'react';
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

const data : Array<Properties> = ([
    {id: 1, type: "scissors", url: scissors},
    {id: 2, type: "paper", url: paper},
    {id: 3, type: "rock", url: rock},
    {id: 4, type: "lizard", url: lizard},
    {id: 5, type: "spock", url: spock},

])


function App() {

    const [isRulesShown, setIsRulesShown] = useState<boolean>(false);

    const modalToggle = (): void => {
        setIsRulesShown(prevState => !prevState);
    }


    return (
        <>
            {isRulesShown && <RulesModal onClose={modalToggle}/>}
            <div className="container">
                <Score/>
                <Game data={data} />
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
