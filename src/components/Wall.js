import React from 'react'
import './Wall.sass'
import { Link } from 'react-router-dom'

class Wall extends React.Component {
	componentDidUpdate() {
		const { state, props, wallGetRequest } = this.props

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
	}

	renderPosts() {
		const { state, getCommentsRequest } = this.props

		const takePhoto = (item) => {
			if (!item.attachments) return
			if (item.attachments[0].type === 'photo' && item.attachments[0].photo.sizes[4]) {
				return <img src={item.attachments[0].photo.sizes[4].url} alt='' className='post-img'/>
			}
		}

		const takeDate = (ms) => {
			return new Date(ms).toLocaleString()
		}

		if (!state.isFatching && state.posts[0]) {
			return state.posts.map(item => (
				<Link to={`comments`} key={item.id} >
					<div onClick={() => {
						console.log(item.owner_id, item.id)
						sessionStorage.owner_id = item.owner_id
						sessionStorage.item_id = item.id
						getCommentsRequest(sessionStorage.owner_id, sessionStorage.item_id)
						}} className='wall-post'>
						<div className='post-date'>{takeDate(item.date*1000)}</div>
						<div className='post-text'>{item.text}</div>
						<div className='post-img-div'>
							{takePhoto(item)}
						</div>
						<div className='post-info'>
							<div>
								<div className='like-svg'/>
								<div>{item.likes.count}</div>
							</div>
							{item.comments && 
							<div>
								<div className='comments-svg'/>
								<div>{item.comments.count}</div>
							</div>}
							<div>
								<div className='reposts-svg'/>
								<div>{item.reposts.count}</div>
							</div>
							{item.views &&
							<div className='views'>
								<div className='view-svg'/>
								<div>{item.views.count}</div>
							</div>
							}
						</div>
					</div>
				</Link>
			))
		}
	}

	render() {
		//const { state } = this.props

		return (
			<div className='wall-grid'>{this.renderPosts()}</div>
		)
	}
}

export default Wall