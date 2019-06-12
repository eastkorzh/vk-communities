import React from 'react'
import { Link } from 'react-router-dom'
import './Communities.sass'

class Communities extends React.Component {
    renderCommunities() {
        const { wallGetRequest, state } = this.props
        const communities = state.communities

        return communities.map(item => (
            <div key={item.id} className='group-card' style={{ opacity: state.isFetching ? 0.5 : 1 }}>
                <div onClick={() => wallGetRequest(item)}>
                    <Link to={`/${item.screen_name}/wall` }>
                        <img src={item.photo_100} alt={`${item.name}`}/>
                    </Link>
                </div>
                <div className='info'>
                    <Link to={`/${item.screen_name}/wall`} className='group-name'>
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