import React from 'react'
import './Comments.sass'

class Comments extends React.Component {
    componentDidUpdate() {
        const { state, getCommentsRequest, props, wallGetRequest } = this.props

        const takePickedGroup = (screen_name) => {
			const groups = state.communities

			for (let i=0; groups.length > i; i++) {
				if (groups[i].screen_name === screen_name) return groups[i] 
			}
		}

		if (!state.pickedGroup.screen_name && state.communities[0] && !state.isFetching) {
			const pickedGroup = takePickedGroup(props.match.params.id)
			
			wallGetRequest(pickedGroup)
		}
        
        if (!state.comments.count && !state.isFetching) {
            getCommentsRequest(sessionStorage.owner_id, sessionStorage.item_id)
        }
    }

    renderComments() {
        const { state } = this.props

        
        const takeProfile = (id) => {
            const profiles = state.comments.profiles
            
            for (let i=0; i < profiles.length; i++) {
                if (profiles[i].id === id) return profiles[i]
            }
        }
        
        return state.comments.items.map( item => {
            // eslint-disable-next-line array-callback-return
            if (item.deleted) return
            const profile = takeProfile(item.from_id)

            return (
                <div key={item.id} className='comment-card'>
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
        })
    }
    
    render() {
        const { state } = this.props

        return(
            <div className='comments-grid'>
                {(state.comments.items && state.comments.profiles )&&
                    this.renderComments()}
            </div>
        )
    }
}

export default Comments