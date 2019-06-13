import React from 'react'

const CommentCard = ({item, state}) => {
    const takeProfile = (id) => {
        const profiles = state.comments.profiles
        
        for (let i=0; i < profiles.length; i++) {
            if (profiles[i].id === id) return profiles[i]
        }
    }

    // eslint-disable-next-line array-callback-return
    if (item.deleted) return 'Comment delited'
    const profile = takeProfile(item.from_id)

    return(
        <div className='comment-card'>
            <a href={profile && 'https://vk.com/id'+profile.id}>
                <img src={profile && profile.photo_50} alt=''/>
            </a>
            <div className='comment'>
                <a href={profile && 'https://vk.com/id'+profile.id}>{profile && (profile.first_name + ' ' + profile.last_name)}</a>
                <div>{item.text}</div>
                <div className='comment-like'>
                    <div className='like'/>
                    <div>{item.likes && item.likes.count}</div>
                </div>
            </div>                                                           
        </div>
    )
}

export default CommentCard