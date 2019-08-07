import React from 'react'
import './ProfileCard.sass'

const ProfileCard = ({ state }) => (
	<div className='profile-card'>
		<p>{state.first_name}</p>
		<a href={`https://vk.com/id${localStorage.id}`}>
			<img src={state.photo} alt='Profile'/>
		</a>
	</div>
)

export default ProfileCard
