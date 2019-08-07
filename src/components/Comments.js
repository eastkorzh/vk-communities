import React from 'react'
import './Comments.sass'
import CommentCard from './CommentCard'

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
		
		return state.comments.items.map( item => {
			return (
				<div key={item.id} className='wrapper'>
					<CommentCard item={item} state={state}/>

					<div className='thread'>
						{(item.thread.count !== 0) && item.thread.items.map(
							item => (
								<CommentCard key={item.id} item={item} state={state}/>
							)
						)}
					</div>
				</div>
			)
		})
	}
	
	render() {
		const { state } = this.props

		return(
			<div className='comments-grid' style={{ opacity: state.isFetching ? 0.2 : 1 }}>
				{(state.comments.items && state.comments.profiles )&&
					this.renderComments()}
			</div>
		)
	}
}

export default Comments
