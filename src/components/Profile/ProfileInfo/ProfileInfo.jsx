import React from "react";
import classes from './ProfileInfo.module.less'

const ProfileInfo = () => {
    return <div className={classes.about}>
        <div className={classes.present}>
            <div className={classes.img}></div>

            <div className={classes.descriptions}>
                <h2 className={classes.name}>Moon Killer</h2>
                <div className={classes.descriptions}>
                    <span className={classes.subtitle}>Birthday</span>
                    <span className={classes.subtitle}>21 sol</span>
                </div>
                <div className={classes.description}>
                    <span className={classes.subtitle}>Education</span>
                    <span className={classes.title}>Earth</span>
                </div>
                <div className={classes.description}>
                    <span className={classes.subtitle}>Contacts</span>
                    <span className={classes.title}>He will find you</span>
                </div>
            </div>

        </div>

    </div>

}

export default ProfileInfo;