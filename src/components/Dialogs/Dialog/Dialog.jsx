import React from "react";
import classes from './Dialog.module.less'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return <li className={classes.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>


}

export default Dialog;