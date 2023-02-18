import classes from "./RulesModal.module.scss"
import rules_img from "../assets/images/image-rules-bonus.svg";
import close_icon from "../assets/images/icon-close.svg";
import {createPortal} from "react-dom";

interface Props {
    onClose: () => void;
}

function RulesModal({onClose}: Props) {

    const Overlay = () => {
        return (
            <div className={classes.modal__container}>
                <h1>rules</h1>
                <div className={classes.modal__container__img__container}>
                    <img src={rules_img} alt="rules"/>
                </div>
                <div className={classes.modal__container__close} onClick={onClose}>
                    <img src={close_icon} alt="close"/>
                </div>
            </div>
        )
    }


    return createPortal(<Overlay/>, document.getElementById("overlay") as HTMLElement)


}

export default RulesModal;