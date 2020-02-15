import React from 'react';
import * as axios from 'axios'
import AppBody from './components/AppBody/AppBody'

class AppContainer extends React.Component {

    componentDidMount() {
        axios.get('https://localhost:8000/tracks').then(res => {
            const tracks = res.data.tracks;
            this.setState({initTracks: tracks})
        })
    }

    state = {
        initTracks: [
            {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
            {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
            {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
            {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
        ]

    };

    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <AppBody tracks={this.state.initTracks}/>
                </header>
            </div>
        );
    }
}

export default AppContainer;
