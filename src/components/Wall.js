import React from 'react'
import './Wall.sass'
import Post from './Post'

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

		if (!state.isFatching && state.posts[0]) {


			return state.posts.map(item => (
				<Post item={item} getCommentsRequest={getCommentsRequest} key={item.id}/>
			))
		}
	}

	render() {
		const { state } = this.props

		return (
			<div className='wall-grid' style={{ opacity: state.isFetching ? 0.5 : 1 }}>{this.renderPosts()}</div>
		)
	}
}

export default Wall
