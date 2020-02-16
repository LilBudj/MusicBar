import React from 'react'
import {Select} from 'antd'
import style from './AppBody/AppBody.module.css'

const Selector = (props) => {

    const select = (e) => {
        props.selectAction(e)
    };

    return(
        <div className={style.selectContainer}>
            <Select defaultValue={props.placeholder} className={style.selector} onBlur={(e) => select(e)}>
                <option value={props.opt1} className={style.option}>{props.opt1}</option>
                <option value={props.opt2} className={style.option}>{props.opt2}</option>
                <option value={props.opt3} className={style.option}>{props.opt3}</option>
                <option value={props.opt4} className={style.option}>{props.opt4}</option>
            </Select>
        </div>
    )
};

export default Selector