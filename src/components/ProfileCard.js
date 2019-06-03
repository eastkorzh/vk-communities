import React from 'react'

const ProfileCard = ({ state }) => (
    <div>
        <img src={state.photo} alt='Profile'/>
        <p>{state.first_name}</p>
        <p>{state.last_name}</p>
    </div>
)

export default ProfileCard