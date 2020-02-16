import React from 'react';
import * as axios from 'axios'
import AppBody from './components/AppBody/AppBody'
import 'antd/dist/antd.css'

class AppContainer extends React.Component {

    state = {
        initTracks: []
    };

    componentDidMount() {
        axios.get('http://localhost:3010/tracks').then(res => {
            const initTracks = res.data.initTracks.tracks;
            this.setState({initTracks})
        })
    }

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
