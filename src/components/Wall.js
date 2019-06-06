import React from 'react'
import './Wall.sass'

class Wall extends React.Component {
    componentDidMount() {
        const { state, wallGetRequest } = this.props

        if (!state.posts[0]) {
            wallGetRequest(state.name)
        }
    }

    renderPosts() {
        const { state } = this.props

        const takePhoto = (item) => {
            if (!item.attachments) return
            if (item.attachments[0].type === 'photo') {
                return <img src={item.attachments[0].photo.sizes[0].url} alt=''/>
            }
        }

        const takeDate = (ms) => {
            return new Date(ms).toLocaleString()
        }

        if (state.posts[0]) {
            return state.posts.map(item => (
                <div key={item.id} className='wall-post'>
                    <div>{takeDate(item.date*1000)}</div>
                    <div>{item.text}</div>
                    <div>{takePhoto(item)}</div>
                    <div className='post-info'>
                        <div>
                            <div className='like-svg'/>
                            <div>{item.likes.count}</div>
                        </div>
                        <div>
                            <div className='reposts-svg'/>
                            <div>{item.reposts.count}</div>
                        </div>
                        <div>
                            <div className='view-svg'/>
                            <div>{item.views.count}</div>
                        </div>
                    </div>
                </div>
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