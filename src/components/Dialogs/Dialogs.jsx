import React from "react";
import classes from './Dialogs.module.less'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";




const Dialogs = (props) => {

    let dialogsEl = props.dialogs.map( d => <Dialog name={d.name} id={d.id}/>  );
    let messageEl = props.message.map( m => <Message message={m.message} />  );


    return <div className={classes.contentWrapper}>
        <div className={classes.wrapper}>

            <div className={classes.conversation}>
                <h1 className={classes.title}>Dialogs</h1>
                <ul className={classes.list}>
                    {
                        dialogsEl
                    }
                </ul>
            </div>
            <div className={classes.line}></div>

            <div className={classes.messages}>
                {
                    messageEl
                }
            </div>

        </div>


    </div>

}

export default Dialogs;