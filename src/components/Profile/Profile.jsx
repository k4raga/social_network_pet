import React from "react";
import classes from './Profile.module.less'
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";





const Profile = (props) => {

    let postEL = props.posts.map( p => <Post name={p.name} message={p.message} date={p.date} />  );

    return  <div className={classes.contentWrapper}>
        <div className={classes.backImg}></div>
        <div className={classes.content}>
                <ProfileInfo />
            <div className={classes.inputPost}>
                <h2 className={classes.titlePost}>Posts</h2>
                <input className={classes.tell} type="text" placeholder='Tell us your new victim...'/>
                <button>Send</button>
            </div>
            {
                postEL
            }

        </div>


</div>

}

export default Profile;