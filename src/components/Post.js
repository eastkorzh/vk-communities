import React, { Component } from 'react'
//import ReactDOM from "react-dom"
import './Post.sass'
import { Link } from 'react-router-dom'

class Post extends Component {
	constructor(props) {
		super(props)
		this.state = {
			style: {
				gridRowEnd: "span 2"
			}
		}
		this.wallPost = React.createRef()
		this.postRef = React.createRef()
	}
	
	resizeComponent() {
		let postHeight = this.wallPost.current.getBoundingClientRect().height
		let k = Math.ceil((postHeight + 5) / 5 ) + 1

		this.setState({style: { gridRowEnd: `span ${k}`}})	
	}

	componentDidMount() {
		this.resizeComponent()
	}


	takePhoto(item, size) {
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

	takeDate(ms) {
		return new Date(ms).toLocaleString()
	}

	render() {
		const { item, getCommentsRequest } = this.props
		return (
				<Link 
					to={`comments`} 
					key={item.id + "link"} 
					style={this.state.style} 
					className={`item`}
					ref={this.postRef}
				>
					<div 
						ref={this.wallPost} 
						onClick={() => {
							if (item.comments.count) {
								sessionStorage.owner_id = item.owner_id
								sessionStorage.item_id = item.id
								getCommentsRequest(sessionStorage.owner_id, sessionStorage.item_id)
							}
						}} 
						className={`wall-post ${item.id}`} 
					>
						<div className='post-date'>{this.takeDate(item.date*1000)}</div>
						<div className='post-text'>{item.text}</div>
						<div className='post-img-div' onLoad={()=>this.resizeComponent()}>
							{this.takePhoto(item, 4)}
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
		)
	}
}

export default Post