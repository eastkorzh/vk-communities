import React from 'react'

const ProfileCard = ({ state }) => (
    <div>
        <img src={localStorage.photo_400} alt=''/>
        <p>{localStorage.first_name}</p>
        <p>{localStorage.last_name}</p>
    </div>
)

export default ProfileCard