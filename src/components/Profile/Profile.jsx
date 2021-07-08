import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ status,profile,updateStatus,isOwner,savePhoto,saveProfile }) => {
    return (<div>
        <ProfileInfo savePhoto={savePhoto}
                     isOwner={isOwner}
                     status={status}
                     profile={profile}
                     updateStatus={updateStatus}
                     saveProfile={saveProfile}/>
        <MyPostsContainer />
    </div>);
}

export default Profile;