import { circularProgressClasses } from '@mui/material';
import React from 'react';
import style from '../styles/volunteerCard.module.css'

export default class volunteercard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.volunteerCard}>
                <div className={style.cardContent}>
                <img src={"/static/bookmark.svg"} className={style.bookMark}></img>
                    <div className={style.upper}>
                        <img src={this.props.image} className={style.volunteerCardImage} />
                        <div style={{marginLeft:'0.8rem',}}>
                            <div className={style.volunteerName}>Лахтионов Денис</div>
                            <div className={style.volunteerVolunteer}>Волонтёр</div>
                            <div className={style.volunteerStat}>Опыт: <b>240 ч.</b></div>
                        </div>
                    </div>
                    <hr style={{borderTop: '1px solid #E0E2E4', width:'calc(100% + 36px)', marginLeft:'-18px'}}></hr>
                    <h4 className={style.cardSubtitle}>Направления:</h4>
                    <div className={style.containerFlexRow}>
                        <div className={[style.directionGeneral, style.directionOrange].join(' ')}>Здравоохранение</div>
                        <div className={[style.directionGeneral, style.directionPink].join(' ')}>Социальное</div>
                        <div className={[style.directionGeneral, style.directionBlue].join(' ')}>Событийное</div>
                    </div>
                    <h4 className={style.cardSubtitle}>Возраст: <b>18 лет</b></h4>
                    <a className={style.link}>Занятость волонтёра <img src={"/static/volunteerBusiness.svg"} style={{marginLeft: '0.5rem'}}></img></a>
                </div>
            </div>
        )
    }
}
