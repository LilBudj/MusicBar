import React from "react";
import style from "./Track.module.css"

const Track = (props) => {
    return(
        <div className={(props.id % 2 === 0) ? style.container1 : style.container2} >
            <div className={style.element}>
                {props.singer}
            </div>
            <div className={style.element}>
                {props.song}
            </div>
            <div className={style.element}>
                {props.genre}
            </div>
            <div className={style.element}>
                {props.year}
            </div>
        </div>
    )
};

export default Track