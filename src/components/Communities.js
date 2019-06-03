import React from 'react'
import { Link } from 'react-router-dom'

class Communities extends React.Component {
    renderCommunities() {
        const { wallGetRequest } = this.props
        const communities = this.props.state.communities

        return communities.map(item => (
            <div key={item.id}>
                <div onClick={() => wallGetRequest(item.screen_name)}>
                    <Link to={`/wall` }>
                        <img src={item.photo_100} alt={`${item.name}`}/>
                    </Link>
                </div>
                <Link to={`/wall`}>
                    <div>{item.name}</div>
                </Link>
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