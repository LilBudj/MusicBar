import React, {useState} from "react";
import TrackContainer from "../track/TrackContainer";
import style from './AppBody.module.css'
import Selector from "../Selector";

const AppBody = (props) => {
    let [singer, setSinger] = useState(null);
    let [genre, setGenre] = useState(null);
    let [year, setYear] = useState(null);


    const tracks = props.tracks.filter( t => {
            if (t.singer === singer || singer === null){
                if (t.genre === genre || genre === null){
                    return t.year === year || year === null;
                }
                else return false
            }
            else return false

    }).map( (t) => <TrackContainer song={t.song} singer={t.singer} genre={t.genre} year={t.year}/>);

    return(
        <div className={style.container}>
            <div className={style.tracks}>
            <TrackContainer song={"song"} singer={"singer"} genre={"genre"} year={"year"}/>
                {tracks}
                <div className={style.pagination}>
                    <div className={style.counter}>

                    </div>
                    <div className={style.pages}>

                    </div>
                </div>
            </div>
            <div className={style.selectors}>
                <Selector placeholder={"Select a singer"} selectAction={setSinger}
                          opt1={"Slipknot"} opt2={"Linkin Park"} opt3={"Scorpions"} opt4={"Limp Bizkit"}/>
                <Selector placeholder={"Select a genre"} selectAction={setGenre}
                          opt1={"Heavy Metal"} opt2={"Rock"} opt3={"Punk-Rock"} opt4={"Metal"}/>
                <Selector placeholder={"Select a year"} selectAction={setYear}
                          opt1={"2008"} opt2={"2002"} opt3={"1989"} opt4={"1999"}/>
            </div>
        </div>
    )
};

export default AppBody