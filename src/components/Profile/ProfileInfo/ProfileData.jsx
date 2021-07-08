import React from "react";
import Contacts from "./Contacts";

const ProfileData = ({ profile , isOwner ,goToEditMode}) => {

    return (<div>
        <div>{isOwner && <button onClick={goToEditMode}>Edit</button>}</div>
        <div><b>Full name</b> : {profile.fullName} </div>
        <div><b>Looking for a job</b> : {profile.lookingForAJob ? ' Yes' : 'No'} </div>
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}

        </div>

        {
            profile.lookingForAJob &&
            <div>
                <b>My professional skills : </b>{profile.lookingForAJobDescription}
            </div>
        }

        <div><b>About me : </b>{profile.aboutMe}</div>
    </div>)
}

export default ProfileData;