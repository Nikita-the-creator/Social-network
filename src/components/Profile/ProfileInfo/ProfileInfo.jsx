import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import defaultAvatar from '../../../assets/images/defaultAvatar.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, updateStatus, status }) => {

    if (!profile) {
        return <Preloader/>
    }

    return (<div>
        <div className={s.description}>
            <div>
                <img src={profile.photos.large != null ? profile.photos.large : defaultAvatar} alt=""/>
                <div>{profile.contacts.website}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.twitter}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.youtube}</div>
                <div> {profile.lookingForAJob ? 'Looking for a Job' : 'Dont Looking for a Job'} </div>
                <div>{profile.fullName} </div>
            </div>
            <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
        </div>
    </div>);
}

export default ProfileInfo;