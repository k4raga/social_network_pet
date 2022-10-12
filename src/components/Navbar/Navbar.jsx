import React from "react";
import classes from './Navbar.module.less'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return  <nav className={classes.nav}>
        <div className={classes.ulWrapper}>

            <ul className={classes.items}>
                <li className={classes.item}><NavLink className = {classes.link} activeClassName={classes.active} to='/'>Profile</NavLink></li>
                <li className={classes.item}><NavLink className = {classes.link} activeClassName={classes.active} to='/dialogs'>Message</NavLink></li>
                <li className={classes.item}>News</li>
                <li className={classes.item}>Music</li>
            </ul>
        </div>
    </nav>

}

export default Navbar;