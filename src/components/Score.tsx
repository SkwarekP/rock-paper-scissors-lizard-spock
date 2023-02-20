import classes from "./Score.module.scss";
import logo from "../assets/images/logo-bonus.svg";

interface IProps {
    score: number;
}

function Score({score}: IProps) {

    return (
        <header className={classes.score__container}>
            <div className={classes.score__container__logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.score__container__counter}>
                <p>score</p>
                <span>{score}</span>
            </div>
        </header>
    )
}

export default Score;