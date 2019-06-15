import React from 'react'
import './Wall.sass'
import Post from './Post'

class Wall extends React.Component {
	componentDidMount() {
		//console.log(this.content)
	}

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

		// const takePhoto = (item, size) => {
		// 	if (!item.attachments) return
			
		// 	let photos = []
	
		// 	for (let a of item.attachments) {
		// 		if (a.type === 'photo') photos.push(a.photo)
		// 	}
	
		// 	if (!photos.length) return
	
		// 	const filteredPhotos =  photos.map(i => {
		// 		let result = {}
	
		// 		if (i.sizes[size]) {
		// 			result = i.sizes[size]	
		// 		} else {
		// 			for (let j=size; j>0; j--) {
		// 				if (i.sizes[j]) return i.sizes[j]
		// 			}
		// 		}
				
		// 		return result
		// 	})
			
		// 	return(
		// 		<img src={filteredPhotos[0].url} alt='' className='attached-img'/>
		// 	)
		// }

		// const takeDate = (ms) => {
		// 	return new Date(ms).toLocaleString()
		// }

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