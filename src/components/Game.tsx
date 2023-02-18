import classes from "./Game.module.scss";
import pentagon from "../assets/images/bg-pentagon.svg";
import {Properties} from "../App";
import React, {useEffect, useState} from "react";

interface Props {
    data: Array<Properties>;
}


function Game({data}: Props) {

    const [isUserSelected, setIsUserSelected] = useState(false);
    const [userChoice, setUserChoice] = useState({type: "", url: ""});
    const [computerChoice, setComputerChoice] = useState({type: "", url: ""});

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (userChoice.type !== "") {
                const ai = Math.floor(Math.random() * 5 + 1);
                const selectOne = data.find(item => item.id === ai)
                setComputerChoice({type: selectOne!.type, url: selectOne!.url});
            }
        }, 500)

        return () => {
            clearTimeout(timeout);
        }


    }, [userChoice])


    const handleEventClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        const find = data.find(item => item.type === e.currentTarget.value)
        setUserChoice({type: find!.type, url: find!.url});
        setIsUserSelected(true);
    }

    const playAgainHandler = (): void => {
        setIsUserSelected(false);
        setUserChoice({type: "", url: ""});
        setComputerChoice({type :"", url: ""});
    }

    return (
        <div className={classes.game__container}>
            <div className={classes.game__container__pg}>
                {isUserSelected ? data.map(item => {
                        if (item.type === userChoice.type) {
                            return (
                                <div key={item.id}>
                                <div className={classes.userChose__container}>
                                    <div>
                                        <button
                                            className={`${classes.userChose} ${classes[item.type]}`}>
                                            <img src={item.url} alt={item.type}/>
                                        </button>
                                        <p>you picked</p>
                                    </div>
                                    {computerChoice.type === "" ?
                                        <div className={classes.computerChose}>

                                        </div>
                                        :
                                        <div>
                                            <button key={computerChoice.url}
                                                    className={`${classes.userChose} ${classes[computerChoice.type]}`}>
                                                <img src={computerChoice.url} alt={item.type}/>
                                            </button>
                                            <p>The House Picked</p>
                                        </div>
                                    }

                                </div>
                                </div>
                            )
                        }


                    })
                    : <div>
                        <img src={pentagon} alt="pentagon"/>
                        {data.map(item => (
                            <button key={item.id}
                                    value={item.type}
                                    className={`${classes.game__container__icon__container} ${classes[item.type]}`}
                                    onClick={handleEventClicked}>
                                <img src={item.url} alt={item.url}/>
                            </button>
                        ))}
                    </div>}
                    {isUserSelected && <div className={classes.information__panel}>
                                    {userChoice.type === "paper" && computerChoice.type === "rock" && <p>You win</p>}
                                    {userChoice.type === "paper" && computerChoice.type === "spock" && <p>You win</p>}
                                    {userChoice.type === "scissors" && computerChoice.type === "paper" && <p>You win</p>}
                                    {userChoice.type === "scissors" && computerChoice.type === "lizard" && <p>You win</p>}
                                    {userChoice.type === "rock" && computerChoice.type === "scissors" && <p>You win</p>}
                                    {userChoice.type === "rock" && computerChoice.type === "lizard" && <p>You win</p>}
                                    {userChoice.type === "spock" && computerChoice.type === "scissors" && <p>You win</p>}
                                    {userChoice.type === "spock" && computerChoice.type === "rock" && <p>You win</p>}
                                    {userChoice.type === "lizard" && computerChoice.type === "spock" && <p>You win</p>}
                                    {userChoice.type === "lizard" && computerChoice.type === "paper" && <p>You win</p>}
                                    {userChoice.type === computerChoice.type && <p>draw!</p>}
                                    {computerChoice.type === "paper" && userChoice.type === "rock" && <p>The house win</p>}
                                    {computerChoice.type === "paper" && userChoice.type === "spock" && <p>The house win</p>}
                                    {computerChoice.type === "scissors" && userChoice.type === "paper" && <p>The house win</p>}
                                    {computerChoice.type === "scissors" && userChoice.type=== "lizard" && <p>The house win</p>}
                                    {computerChoice.type === "rock" && userChoice.type === "scissors" && <p>The house win</p>}
                                    {computerChoice.type === "rock" && userChoice.type === "lizard" && <p>The house win</p>}
                                    {computerChoice.type === "spock" && userChoice.type === "scissors" && <p>The house win</p>}
                                    {computerChoice.type === "spock" && userChoice.type === "rock" && <p>The house win</p>}
                                    {computerChoice.type === "lizard" && userChoice.type === "spock" && <p>The house win</p>}
                                    {computerChoice.type === "lizard" && userChoice.type === "paper" && <p>The house win</p>}
                               
                                    <button className={classes.information__panel__btn} onClick={playAgainHandler}>
                                        play again
                                    </button>
                                </div>}
            </div>
            

        </div>
    )
}

export default Game;