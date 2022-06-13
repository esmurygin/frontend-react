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
                <h4 className={style.cardSubtitle}>Отбор волонтёров на экологическую смену на базе Национального парка</h4>
                <div className={style.volunteerVolunteer}>Россия, г. Москва</div>
                <div className={style.cardContent}>
                <img src={"/static/heart.svg"} className={style.bookMark}></img>
                    <div className={style.upper}>
                        <img src={this.props.image} className={style.volunteerCardImage} />
                        
                    </div>
                    <h4 className={style.titleCard}>Направления:</h4>
                    <div className={style.containerFlexRow}>
                        <div className={[style.directionGeneral, style.directionOrange].join(' ')}>Здравоохранение</div>
                        <div className={[style.directionGeneral, style.directionPink].join(' ')}>Социальное</div>
                        <div className={[style.directionGeneral, style.directionBlue].join(' ')}>Событийное</div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
