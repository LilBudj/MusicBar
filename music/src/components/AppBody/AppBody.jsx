import React from "react";
import TrackContainer from "../track/TrackContainer";
import style from './AppBody.module.css'
import {Select} from 'antd'
import Selector from "../Selector";

const AppBody = (props) => {

    const tracks = props.tracks.map( (t) => <TrackContainer song={t.song} singer={t.singer} genre={t.genre} year={t.year}/>);

    return(
        <div className={style.container}>
            <div className={style.tracks}>
            <TrackContainer song={"song"} singer={"singer"} genre={"genre"} year={"year"}/>
                {tracks}
            </div>
            <div className={style.selectors}>
                <Selector placeholder={"Select a singer"}
                          opt1={"Slipknot"} opt2={"Linkin Park"} opt3={"Scorpions"} opt4={"Limp Bizkit"}/>
                <Selector placeholder={"Select a genre"}
                          opt1={"Slipknot"} opt2={"Linkin Park"} opt3={"Scorpions"} opt4={"Limp Bizkit"}/>
                <Selector placeholder={"Select a year"}
                          opt1={"Slipknot"} opt2={"Linkin Park"} opt3={"Scorpions"} opt4={"Limp Bizkit"}/>
            </div>
        </div>
    )
};

export default AppBody