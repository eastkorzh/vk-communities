import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Back.sass'

class Back extends React.Component {
    render

    render() {
        const { state, match } = this.props
        return(
            <div className='back'>
                <Route path='/:id/wall'
                    render = {
                        () => {
                            return(
                                <>
                                <Link to={'/'}>
                                    <div className='back-svg'/>
                                </Link>
                                <div className='back-img'>
                                    {state.pickedGroup &&
                                        <img src={state.pickedGroup.photo_50} alt=''/>
                                    }
                                </div>
                                <div className='back-h1'>
                                    {state.pickedGroup &&
                                        <h1>{state.pickedGroup.name.slice(0, 26)}</h1>
                                    }
                                </div>
                                </>
                            )
                        }
                    }
                />
                <Route path='/:id/comments'
                    render = {
                        () => {
                            return(
                                <>
                                <Link to={`/${match.params.id}/wall`}>
                                    <div className='back-svg'/>
                                </Link>
                                <div className='back-img'>
                                    {state.pickedGroup &&
                                        <img src={state.pickedGroup.photo_50} alt=''/>
                                    }
                                </div>
                                <div className='back-h1'>
                                    {state.pickedGroup &&
                                        <h1>Комментарии</h1>
                                    }
                                </div>
                                </>
                            )
                        }
                    }
                />
            </div>
        )
    }
}

export default Back