import React from "react";
import Button from "./Button";
import './Alert.css';

const Alert = (props) => {
    return(
        <div className={props.type}>
            <div className="alert_content">
                {props.type === "success_notification"  && <img className="alert_info_image" src="./images/alert_success.png" />}
                {props.type === "warning_notification"  && <img className="alert_info_image" src="./images/alert_warning.png" />}
                {props.type === "danger_notification"  && <img className="alert_info_image" src="./images/alert_danger.png" />}
                <p>{props.message}</p>
                {props.type === "success_notification"  && <Button class="alert_close_success" />}
                {props.type === "warning_notification"  && <Button class="alert_close_warning" />}
                {props.type === "danger_notification"  && <Button class="alert_close_danger" />}
            </div>
        </div>
    )
}

export default Alert