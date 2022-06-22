import React from "react";
import Button from "../Button/Button";
import './Alert.css';

const Alert = (props) => {
    const hideMaxNumberHandler = (result) => {
        props.hideMaxNumber(true)
    }

    return(
        <div className={props.type}>
            <div className="alertContent">
                {props.type === "successNotification"  && <img className="alertInfoImage" src="./images/alert_success.png" alt=""/>}
                {props.type === "warningNotification"  && <img className="alertInfoImage" src="./images/alert_warning.png" alt=""/>}
                {props.type === "dangerNotification"  && <img className="alertInfoImage" src="./images/alert_danger.png" alt=""/>}
                <p className="alertContentParagraph">{props.message}</p>
                {props.type === "successNotification"  && <Button class="alertCloseSuccess" />}
                {props.type === "warningNotification"  && <Button class="alertCloseWarning" hideMaxNumber={hideMaxNumberHandler} />}
                {props.type === "dangerNotification"  && <Button class="alertCloseDanger" />}
            </div>
        </div>
    )
}

export default Alert