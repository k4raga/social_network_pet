import React from "react";

const Profile = () => {
    return  <div className="content-wrapper">
        <div className="back-img"></div>
        <div className='content'>
            <div className="about">
                <div className="present">
                    <div className="img"></div>

                    <div className="descriptions">
                        <h2 className='name'>Moon Killer</h2>
                        <div className="description">
                            <span className="subtitle">Birthday</span>
                            <span className="title">21 sol</span>
                        </div>
                        <div className="description">
                            <span className="subtitle">Education</span>
                            <span className="title">Earth</span>
                        </div>
                        <div className="description">
                            <span className="subtitle">Contacts</span>
                            <span className="title">He will find you</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="inputpost">
                <h2 className="title-post">Posts</h2>
                <input className='tell' type="text" placeholder='Tell us your new victim...'/>
                <button>Send</button>
            </div>
            <div className="posts">
                <div className="myPost">
                    <div className="post">
                        <div className="profile-img"></div>
                        <div className="wrap">
                            <div className="name">Moon Killer</div>
                            <div className="message">Tomorrow I will kill Sarah Connor, wish me luck</div>
                            <div className="date">23 sol</div>
                        </div>
                    </div>
                </div>
                <div className="otherPost">
                    <div className="post">
                        <div className="profile-img"></div>
                        <div className="wrap">
                            <div className="name">Xabiere</div>
                            <div className="message">Happy enslavement</div>
                            <div className="date">23 sol</div>
                        </div>
                    </div>
                </div>
                <div className="myPost">
                    <div className="post">
                        <div className="profile-img"></div>
                        <div className="wrap">
                            <div className="name">Moon Killer</div>
                            <div className="message">Man is so tasty</div>
                            <div className="date">23 sol</div>
                        </div>
                    </div>
                </div>
                <div className="myPost">
                    <div className="post">
                        <div className="profile-img"></div>
                        <div className="wrap">
                            <div className="name">Moon Killer</div>
                            <div className="message">100 recipes from people</div>
                            <div className="date">23 sol</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</div>

}

export default Profile;