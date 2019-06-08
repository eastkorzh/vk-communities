import React from 'react'
import './Comments.sass'

class Comments extends React.Component {
    renderComments() {
        const { state } = this.props

        
        const takeProfile = (id) => {
            const profiles = state.comments.profiles
            
            for (let i=0; i < profiles.length; i++) {
                if (profiles[i].id === id) return profiles[i]
            }
        }
        
        return state.comments.items.map( item => {
            const profile = takeProfile(item.from_id)

            return (
                <div key={item.id} className='comment-card'>
                    <a href={'https://vk.com/id'+profile.id}>
                        <img src={profile.photo_50} alt=''/>
                    </a>
                    <div className='comment'>
                        <a href={'https://vk.com/id'+profile.id}>{profile.first_name + ' ' + profile.last_name}</a>
                        <div>{item.text}</div>
                        <div class='comment-like'>
                            <div className='like'/>
                            <div>{item.likes.count}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    
    render() {
        const { state } = this.props

        return(
            <div className='comments-grid'>
                {state.comments.items &&
                    this.renderComments()}
            </div>
        )
    }
}

export default Comments