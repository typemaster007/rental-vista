import React from 'react'

import user from '../../../assets/images/user.svg'
import './EditProfile.css'

function EditProfile() {

    console.log('IN PROFILE')
    return (
        <div>
            <img src={user} alt="Profile" className="custom-profile-image"/>
        </div>
    )
}

export default EditProfile;
