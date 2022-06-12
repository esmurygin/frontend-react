import { circularProgressClasses } from '@mui/material';
import React from 'react';
import style from '../styles/eventCard.module.css'

export default class eventcard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.eventCard}>
                <img src={this.props.image} className={style.eventCardImage} />
                <div className={style.cardContent}>
                    <div className={style.circleText}><div className={style.circleOrange}></div>Организатор</div>
                    <h3 className={style.headerText}>Хакатон "MoscowCityHack"</h3>
                    <p className={style.cardDescription}>Форум для разработчиков, во время которого специалисты из разных областей разработки программного обеспечения (программисты, дизайнеры, менеджеры) сообща решают какую-либо проблему на время. Некоторые хакатоны предназначены для образовательных или социальных целей, но чаще задачей хакатона является создание полноценного программного обеспечения.</p>
                    <div style={{ flexGrow: 1 }}></div>
                    <h3 className={style.smallHeaderText}>Специализации:</h3>
                    <p className={style.cardDescription}>Python-разработчики, Web-разработчики,   Mobile, Backend,   Frontend </p>
                    <div style={{ flexGrow: 1 }}></div>
                    <h3 className={style.smallHeaderText}>С 10 Июня 19:00 по 13 Июня 16:00</h3>
                    <p className={style.cardDescription}>Ярославль, Точка кипения ЯрГУ им.П.Г. Демидова</p>
                </div>
            </div>
        )
    }
}
