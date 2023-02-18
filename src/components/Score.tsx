import classes from "./Score.module.scss";
import logo from "../assets/images/logo-bonus.svg";

function Score() {

    return (
        <header className={classes.score__container}>
            <div className={classes.score__container__logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.score__container__counter}>
                <p>score</p>
                <span>12</span>
            </div>
        </header>
    )
}

export default Score;