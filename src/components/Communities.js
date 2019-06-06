import React from 'react'
import { Link } from 'react-router-dom'
import './Communities.sass'

class Communities extends React.Component {
    renderCommunities() {
        const { wallGetRequest } = this.props
        const communities = this.props.state.communities

        return communities.map(item => (
            <div key={item.id} className='group-card'>
                <div onClick={() => wallGetRequest(item.screen_name)}>
                    <Link to={`/wall` }>
                        <img src={item.photo_100} alt={`${item.name}`}/>
                    </Link>
                </div>
                <div className='info'>
                    <Link to={`/wall`} className='group-name'>
                        <div>{item.name}</div>
                    </Link>
                    <div>{item.activity}</div>
                    <div>{item.members_count} подписчик</div>
                </div>
            </div>
        ))
    }

    render() {
        const { state } = this.props
        
        return (
            <>
                {state.communities[0] &&
                    this.renderCommunities()
                }
            </>
        )
    }
}

export default Communities