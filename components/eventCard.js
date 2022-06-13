import { circularProgressClasses } from '@mui/material';
import React from 'react';
import style from '../styles/eventCard.module.css'

export default class EventCard extends React.Component {

    constructor(props) {
        super(props);
        this.start_date = new Date(props.start_date);
        this.end_date = new Date(props.end_date);
    }

    render() {
        return (
            <div className={style.eventCard}>
                <img src={'http://i-pro-backend.herokuapp.com/'+this.props.image_url} className={style.eventCardImage} style={{objectFit:'cover'}}></img>
                <div className={style.cardContent}>
                    <div className={style.circleText}><div className={style.circleOrange}></div>{this.props.task_type}</div>
                    <h3 className={style.headerText}>{this.props.name}</h3>
                    <p className={style.cardDescription}>{this.props.description}</p>
                    <div style={{ flexGrow: 1 }}></div>
                    <h3 className={style.smallHeaderText}>Специализации:</h3>
                    <p className={style.cardDescription}>{[this.props.tags].join(' ')} </p>
                    <div style={{ flexGrow: 1 }}></div>
                    <h3 className={style.smallHeaderText}>С {
                        `${this.start_date.getDate()}.${this.start_date.getMonth()} ${this.start_date.getHours()}:${this.start_date.getMinutes()}`
                    } по {
                        `${this.end_date.getDate()}.${this.end_date.getMonth()} ${this.end_date.getHours()}:${this.end_date.getMinutes()}`
                    }</h3>
                    <p className={style.cardDescription}>Россия, г. Москва</p>
                </div>
            </div>
        )
    }
}
