import React from 'react'

class Communities extends React.Component {
    onInputChange = (id) => () => {
        console.log('func : ', id);
        const { disableCommunitieRequest } = this.props;
        disableCommunitieRequest(id)
    }

    renderCommunities() {
        const { disableCommunitieRequest } = this.props
        const communities = this.props.state.communities
        let communitiesList = []

        for (let i = 0; i < communities.length; i++) {
            let isHiddenFromNewsfeed = communities[i].is_hidden_from_feed
            let id = communities[i].id
            //console.log(id)
            
            communitiesList.push(
            <div key={id}>
                <img src={communities[i].photo_100} alt={`${communities[i].name}`}/>
                <div>{communities[i].name}</div>
                <div className="onoffswitch">
                    {console.log('id', id)}
                    <input onChange={this.onInputChange(id)} type="checkbox" className="onoffswitch onoffswitch-checkbox" id="myonoffswitch" checked={!isHiddenFromNewsfeed} />
                    <label className="onoffswitch-label" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
            </div>)
        }

        return communitiesList
    }

    render() {
        const { state } = this.props
        
        // if (state.communities[0]) {
        //     console.log(this.props)
        // }

        return (
            <div>
                {state.communities[0] &&
                    this.renderCommunities()
                }
            </div>
        )
    }
}

// const Communities = ({ state }) => (
//     <div>lel</div>    
// )

export default Communities