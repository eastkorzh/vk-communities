import React from 'react'

class Communities extends React.Component {
    renderCommunities() {
        const { disableCommunitieRequest } = this.props
        const communities = this.props.state.communities

        return communities.map(item => (
            <div key={item.id}>
                <a href={`https://vk.com/${item.screen_name}`}>
                    <img src={item.photo_100} alt={`${item.name}`}/>
                </a>
                <div>{item.name}</div>
                <div>{item.activity}</div>
                <div>{item.members_count}</div>
            </div>
        ))
    }

    render() {
        const { state } = this.props
        
        return (
            <div>
                {state.communities[0] &&
                    this.renderCommunities()
                }
            </div>
        )
    }
}

export default Communities