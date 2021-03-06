import React, {useState} from "react";
import TrackContainer from "../track/TrackContainer";
import style from './AppBody.module.css'
import Selector from "../Selector";

const AppBody = (props) => {
    const [singer, setSinger] = useState(null);
    const [genre, setGenre] = useState(null);
    const [year, setYear] = useState(null);

    const [currentCounter, setCurrentCounter] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const tracks = props.tracks.filter( t => {
            if (t.singer === singer || singer === null){
                if (t.genre === genre || genre === null){
                    return t.year === year || year === null;
                }
                else return false
            }
            else return false

    }).map( (t) => <TrackContainer song={t.song} singer={t.singer} genre={t.genre} year={t.year} key={t.id} id={t.id}/>);

    const pagesCount = [];
    for (let i = 1; i < Math.ceil(tracks.length/currentCounter) + 1; i++){
        pagesCount.push(i)
    }
    const pages = pagesCount.map( i => <span
        onClick={() => {setCurrentPage(i)}} className={(currentPage === i) ? style.active : style.count} key={i}>
        {i} </span>);

    let pagePortioned = tracks.slice((currentPage-1)*currentCounter, (currentPage-1)*currentCounter + currentCounter);

    return(
        <div className={style.container}>
            <div className={style.tracks}>
            <TrackContainer song={"song"} singer={"singer"} genre={"genre"} year={"year"} id={0}/>
            <div className={style.line}/>
                {pagePortioned}
                <div className={style.pagination}>
                    <div className={style.counter}>
                        <span onClick={() => {setCurrentCounter(5)}} className={(currentCounter === 5) ? style.active : ""}>5 </span>
                        <span onClick={() => {setCurrentCounter(10)}} className={(currentCounter === 10) ? style.active : ""}>10 </span>
                        <span onClick={() => {setCurrentCounter(25)}} className={(currentCounter === 25) ? style.active : ""}>25 </span>
                        <span onClick={() => {setCurrentCounter(50)}} className={(currentCounter === 50) ? style.active : ""}>50 </span>
                        <span onClick={() => {setCurrentCounter(100)}} className={(currentCounter === 100) ? style.active : ""}>100 </span>
                    </div>
                    <div className={style.pages}>
                        {pages}
                    </div>
                </div>
            </div>
            <div className={style.selectors}>
                Singer:
                <Selector placeholder={"Select a singer"} selectAction={setSinger}
                          opt1={"Slipknot"} opt2={"Linkin Park"} opt3={"Scorpions"} opt4={"Limp Bizkit"}/>
                          Genre:
                <Selector placeholder={"Select a genre"} selectAction={setGenre}
                          opt1={"Heavy Metal"} opt2={"Rock"} opt3={"Punk-Rock"}
                          opt4={"Metal"} opt5={"Guitar Ballade"} opt6={"Rap-Rock"} opt7={"New Metal"}/>
                          Year:
                <Selector placeholder={"Select a year"} selectAction={setYear}
                          opt1={"1984"} opt2={"1990"} opt3={"1999"} opt4={"2002"}
                          opt5={"2003"} opt6={"2008"} opt7={"2019"}/>
            </div>
        </div>
    )
};

export default AppBody