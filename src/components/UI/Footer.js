import React from "react";
import classes from './Footer.module.css';

const Footer = () => {
    const current = new Date();
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = months[current.getMonth()];
    const date = `${current.getDate()} ${monthName} ${current.getFullYear()}`;
    return(
        <footer className={classes.footer}>
            <div className={classes.footer_date}>{date}</div>
            <div className={classes.footer_logo}>ActoKedavra</div>
        </footer>
    )
}

export default Footer;