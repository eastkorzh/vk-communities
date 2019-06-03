import React from 'react'

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

        if (state.posts[0]) {
            return state.posts.map(item => (
                <div key={item.id}>
                    <div>{item.text}</div>
                    <div>{takePhoto(item)}</div>
                </div>
            ))
        }
    }

    render() {
        //const { state } = this.props

        return (
            <div>{this.renderPosts()}</div>
        )
    }
}

export default Wall