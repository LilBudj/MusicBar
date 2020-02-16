import React from "react";
import TrackContainer from "../track/TrackContainer";
import style from './AppBody.module.css'

const AppBody = (props) => {
debugger
    const tracks = props.tracks.map( (t) => <TrackContainer song={t.song} singer={t.singer} genre={t.genre} year={t.year}/>);

    return(
        <div className={style.container}>
            <div className={style.tracks}>
            <TrackContainer song={"song"} singer={"singer"} genre={"genre"} year={"year"}/>
                {tracks}
            </div>
            <div className={style.selectors}>
                uuu
            </div>
        </div>
    )
};

export default AppBody