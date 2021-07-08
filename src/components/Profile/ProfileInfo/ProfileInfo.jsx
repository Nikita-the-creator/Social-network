import React, { useState } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import defaultAvatar from '../../../assets/images/defaultAvatar.png'
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (initialValues) => {
        saveProfile(initialValues)
            .then(() => {
                    setEditMode(false)
            })


    }

    return (<div>
            <div className={s.description}>
                <div className={s.profileInfo}>
                    <img  src={profile.photos.large != null ? profile.photos.large : defaultAvatar} alt=""/>
                    <div>{isOwner && <input type={'file'} onChange={onMainPhotoChange}/>}</div>
                    {editMode ?
                        <ProfileDataForm onSubmit={onSubmit} profile={profile} saveProfile={saveProfile}/> :
                        <ProfileData isOwner={isOwner} goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile}/>
                    }
                </div>
                <ProfileStatus updateStatus={updateStatus} status={status}/>
            </div>
        </div>
    );
}


export default ProfileInfo;