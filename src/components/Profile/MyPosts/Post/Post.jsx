import React from "react";
import classes from './Post.module.less'
const Post = (props) => {
    return <div className={classes.myPost}>
        <div className={classes.post}>
            <div className={classes.profileImg}></div>
            <div className={classes.wrap}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.date}>{props.date}</div>
            </div>
        </div>
    </div>
}

export default Post;