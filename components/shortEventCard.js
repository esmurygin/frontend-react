import { circularProgressClasses } from '@mui/material';
import React from 'react';
import style from '../styles/shortEventCard.module.css'

export default class ShortEventCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.volunteerCard}>

                <div className={style.flexRow}>
                <img src={'/static/greyLike.png'} style={{position:'absolute', right:"1rem", top:"1rem" }}></img>

                    <h4 className={style.cardSubtitle}>Отбор волонтёров на экологическую смену на базе Национального парка</h4>
                </div>
                <div className={style.volunteerVolunteer}><img src={"/static/calendarEventPage.svg"} style={{ width: '12px', marginRight: '12px' }}></img> 17 Мая - 4 Июля, 16:00</div>
                <div className={style.volunteerVolunteer}><img src={"/static/mapEventPage.svg"} style={{ width: '12px', marginRight: '12px' }}></img> Россия, г. Москва</div>
                <div className={style.cardContent}>
                    <div className={style.upper}>
                        <img src={this.props.image} className={style.eventCardImage} />
                    </div>
                    <div style={{ height: '2rem' }}></div>
                    <div className={style.containerFlexRow}>
                        <div className={[style.directionGeneral, style.directionOrange].join(' ')} style={{ fontSize: '11px' }}>Здравоохранение</div>
                        <div className={[style.directionGeneral, style.directionPink].join(' ')} style={{ fontSize: '11px' }}>Социальное</div>
                        <div className={[style.directionGeneral, style.directionBlue].join(' ')} style={{ fontSize: '11px' }}>Событийное</div>
                    </div>
                </div>
            </div>
        )
    }
}
