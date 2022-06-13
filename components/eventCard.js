import { circularProgressClasses } from '@mui/material';
import React from 'react';
import style from '../styles/eventCard.module.css'

export default class EventCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.eventCard}>
                <img src={'http://i-pro-backend.herokuapp.com/'+this.props.image_url} className={style.eventCardImage} />
                <div className={style.cardContent}>
                    <div className={style.circleText}><div className={style.circleOrange}></div>{this.props.task_type}</div>
                    <h3 className={style.headerText}>{this.props.name}</h3>
                    <p className={style.cardDescription}>{this.props.description}</p>
                    <div style={{ flexGrow: 1 }}></div>
                    <h3 className={style.smallHeaderText}>Специализации:</h3>
                    <p className={style.cardDescription}>Python-разработчики, Web-разработчики,   Mobile, Backend,   Frontend </p>
                    <div style={{ flexGrow: 1 }}></div>
                    <h3 className={style.smallHeaderText}>С {this.props.start_date} по {this.props.end_date}</h3>
                    <p className={style.cardDescription}>Ярославль, Точка кипения ЯрГУ им.П.Г. Демидова</p>
                </div>
            </div>
        )
    }
}
