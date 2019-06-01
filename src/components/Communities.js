import React from 'react'

class Communities extends React.Component {
    renderCommunities() {
        const { disableCommunitieRequest } = this.props
        const communities = this.props.state.communities

        return communities.map(item => (
            <div key={item.id}>
                <img src={item.photo_100} alt={`${item.name}`}/>
                <div>{item.name}</div>
                <div className="onoffswitch">
                    <input
                        onChange={() => disableCommunitieRequest(item.id)}
                        type="checkbox"
                        className="onoffswitch onoffswitch-checkbox"
                        id={`myonoffswitch${item.id}`}
                        checked={!item.is_hidden_from_feed}
                    />
                    <label className="onoffswitch-label" htmlFor={`myonoffswitch${item.id}`}>
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
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