import React from 'react'
import { Route } from 'react-router-dom'
import './Sort.sass'

class Sort extends React.Component {
	constructor(props) {
		super(props)
		this.state = {picked: 0, isSorted: false, originalSort: {}}
	}

	sortCommentsFunction(comments) {
		const { sortComments } = this.props

		if (!this.state.isSorted) {
			this.setState({ originalSort: comments })

			const filteredItems = comments.items.filter(isDeleted => !isDeleted.deleted)
			const filteredComments = { ...comments, items: filteredItems}
	
			const resultItems = filteredComments.items.sort((a, b) => b.likes.count - a.likes.count)
			const result = { ...filteredComments, items: resultItems}

			sortComments(result)
		} else {
			sortComments(this.state.originalSort)
		}
		
		this.setState({isSorted: !this.state.isSorted})
	}


	render() {
		const { state } = this.props

		return(
			<div>
				<Route path='/:id/comments' render={() =>(
					<>
						{state.comments.length !== 0 &&
							<button className='sort-button' onClick={
								() => this.sortCommentsFunction(state.comments)}
							>{(this.state.isSorted) ? 'Сначала старые' : 'Лучшие комментарии'}</button>
						}
					</>
				) 
				}/>
			</div>
		)
	}
}

export default Sort
