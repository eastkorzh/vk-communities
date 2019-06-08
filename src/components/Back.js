import React from 'react'
import { Link, Route } from 'react-router-dom'
import './Back.sass'

class Back extends React.Component {
    render

    render() {
        const { state } = this.props
        return(
            <div className='back'>
                <Route exact path='/wall'
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
                                        <h1>{state.pickedGroup.name}</h1>
                                    }
                                </div>
                                </>
                            )
                        }
                    }
                />
                <Route exact path='/wall/comments'
                    render = {
                        () => {
                            return(
                                <>
                                <Link to={'/wall'}>
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