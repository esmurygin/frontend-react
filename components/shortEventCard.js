import { circularProgressClasses } from '@mui/material';
import React from 'react';
import style from '../styles/shortEventCard.module.css'

export default class ShortEventCard extends React.Component {

    constructor(props) {
        super(props);
        this.start_date = new Date(props.start_date);
        this.end_date = new Date(props.end_date);
    }

    render() {
        return (
            <div className={style.volunteerCard} onClick={()=>document.location.href=`/event_page?id=${this.props.id}`} >

                <div className={style.flexRow}>
                <img src={'/static/greyLike.png'} style={{position:'absolute', right:"1rem", top:"1rem" }}></img>

                    <h4 className={style.cardSubtitle}>{this.props.name}</h4>
                </div>
                <div className={style.volunteerVolunteer}><img src={"/static/calendarEventPage.svg"} style={{ width: '12px', marginRight: '12px' }}></img>С {
                        `${this.start_date.getDate()}.${this.start_date.getMonth()} ${this.start_date.getHours()}:${this.start_date.getMinutes()}`
                    } по {
                        `${this.end_date.getDate()}.${this.end_date.getMonth()} ${this.end_date.getHours()}:${this.end_date.getMinutes()}`
                    }</div>
                <div className={style.volunteerVolunteer}><img src={"/static/mapEventPage.svg"} style={{ width: '12px', marginRight: '12px' }}></img> Россия, г. Москва</div>
                <div className={style.cardContent}>
                    <div className={style.upper}>
                        <img src={'http://i-pro-backend.herokuapp.com/'+this.props.image_url} className={style.eventCardImage} />
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
