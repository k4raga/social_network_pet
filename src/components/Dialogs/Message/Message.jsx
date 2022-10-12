import React from "react";
import classes from './Message.module.less'


const Message = (props) => {
    return <div className={classes.message}>
        <div className={classes.imgWrap}>
            <div className={classes.img}></div>
            <span className={classes.name}>Sasha</span>
        </div>
        <div className={classes.words}>
            <span className={classes.mes}>{props.message}</span>
        </div>
    </div>
}

export default Message;