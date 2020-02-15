import React from 'react'
import Track from "./Track";

class TrackContainer extends React.Component{

    render = () => {
        return(
           <Track song={this.props.song} singer={this.props.singer} genre={this.props.genre} year={this.props.year}/>
        )
    }
};

export default TrackContainer