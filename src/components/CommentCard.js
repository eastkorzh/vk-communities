import React from 'react'

const CommentCard = ({item, state}) => {
	const takeProfile = (id) => {
		const profiles = state.comments.profiles
		const groups = state.comments.groups

		if (`${id}`.includes('-')) {
			for (let i=0; i < groups.length; i++) {
				if (`-${groups[i].id}` === `${id}`) return groups[i]
			}
		} else {
			for (let i=0; i < profiles.length; i++) {
				if (profiles[i].id === id) return profiles[i]
			}
		}
		
	}

	const takePhoto = (item, size) => {
		if (!item.attachments) return
		
		let photos = []

		for (let a of item.attachments) {
			if (a.type === 'photo') photos.push(a.photo)
		}

		if (!photos.length) return

		const filteredPhotos =  photos.map(i => {
			let result = {}

			if (i.sizes[size]) {
				result = i.sizes[size]	
			} else {
				for (let j=size; j>0; j--) {
					if (i.sizes[j]) return i.sizes[j]
				}
			}
			
			return result
		})
		
		return(
			<img src={filteredPhotos[0].url} alt='' className='attached-img'/>
		)
	}

	const handleText = (text) => {
		if (text.slice(0, 1) !== '[') return text

		const start = text.indexOf('[')
		const stop = text.indexOf(']')
		const nameStart = text.indexOf('|')

		const name = text.slice(nameStart + 1, stop)
		const id = text.slice(start + 1, nameStart)
		return (
			<>
				<a href={`https://vk.com/${id}`}>{name}</a>
				<p>{text.slice(stop + 1)}</p>
			</>
		)
	}

	handleText(item.text)

	if (item.deleted) return 'Comment delited'
	const profile = takeProfile(item.from_id)

	return(
		<>
		{profile.type !== 'page' ? (
			<div className='comment-card'>
				<a href={profile && 'https://vk.com/id'+profile.id}>
					<img src={profile && profile.photo_50} alt=''/>
				</a>
				<div className='comment'>
					<a href={profile && 'https://vk.com/id'+profile.id}>{profile && (profile.first_name + ' ' + profile.last_name)}</a>
					<div className='handled-text'>{handleText(item.text)}</div>
					<div>
						{takePhoto(item, 2)}
					</div>
					<div className='comment-like'>
						<div className='like'/>
						<div>{item.likes && item.likes.count}</div>
					</div>
				</div>                                                           
			</div>
		) : (
			<div className='comment-card'>
				<a href={profile && 'https://vk.com/club'+profile.id}>
					<img src={profile && profile.photo_50} alt=''/>
				</a>
				<div className='comment'>
					<a href={profile && 'https://vk.com/club'+profile.id}>{profile && (profile.name)}</a>
					<div className='handled-text'>{handleText(item.text)}</div>
					<div>
						{takePhoto(item, 2)}
					</div>
					<div className='comment-like'>
						<div className='like'/>
						<div>{item.likes && item.likes.count}</div>
					</div>
				</div>                                                           
			</div>
		)}
		</>
	)
}

export default CommentCard