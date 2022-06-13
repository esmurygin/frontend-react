import React from 'react';
import style from '../styles/eventPageCard.module.css'

export default class eventpagecard extends React.Component {

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.organizatorName = this.props.organizatorName;
        this.dates = this.props.dates;
        this.place = this.props.place;
        this.description = this.props.description;
        this.reward = this.props.reward;
        this.preview = this.props.preview;
        this.organizatorImg = this.props.organizatorImg;
    }

    render() {
        return (
            <div className={style.eventPageCard}>
                <div className={style.eventPageTitle}>{this.title}</div>
                <div className={style.flexRow}>
                    <div>
                        <img src={this.preview} className={style.previewEvent}></img>
                        <a href="#" className={[style.flexRow, style.likeButton].join(' ')} style={{ paddingTop: "1rem" }}><img src={'/static/greyLike.png'} className={style.icon} ></img><div>Добавить в избранное</div></a>
                    </div>
                    <div className={style.flexColumn} style={{ paddingLeft: "32px" }}>
                        <h3 className={style.mainInfoTitle}>Основная информация</h3>
                        <div className={[style.Line, style.flexRow].join(' ')}>
                            <img src={this.organizatorImg} className={style.icon}></img>
                            <a href="#" style={{ color: "#2892F4", textDecoration: "underline" }}>{this.organizatorName}</a>
                        </div>
                        <div className={[style.Line, style.flexRow].join(' ')}>
                            <img src={'/static/calendarEventPage.svg'} className={style.icon}></img>
                            <a href="#">{this.dates}</a>
                        </div>
                        <div className={[style.Line, style.flexRow].join(' ')}>
                            <img src={'/static/mapEventPage.svg'} className={style.icon}></img>
                            <div className={style.flexColumn} style={{ justifyContent: "flex-start" }}>
                                <div>{this.place}</div>
                                <a href="#" style={{ color: "#2892F4", display: 'block' }}>Показать на карте</a>
                            </div>
                        </div>
                        <div className={style.awardMessage}>Вы получите <b>{this.reward}</b>* на баланс <a href="#" style={{ textDecoration: "underline", color: "#2892F4" }}>волонтёрской карты</a></div>
                    </div>

                </div>
                <div className={style.spacerThree}></div>
                <div className={style.flexRow} style={{ justifyContent: "space-between" }} >
                    <div className={style.flexColumn}>
                        <h3 className={style.mainInfoTitle}>Описание</h3>
                        <p className={style.description}>
                            {this.description}
                        </p>
                        <a href="#" style={{ color: "#2892F4", display: 'block' }}>Показать полностью</a>
                    </div>
                    <div>
                        <div className={style.documentFieldBox}>
                            <div className={style.flexColumn} style={{ justifyContent: "center", alignItems: "center" }}>
                                <h3 className={style.mainInfoTitle} style={{ margin: "0" }}>Документы</h3>
                                <p className={style.description} style={{ textAlign: "center" }}>
                                    Программа география добра на сайт.pdf
                                </p>
                            </div>
                            <img src={'/static/softwareDownload.svg'} style={{ width: '40px', height: '40px', cursor: 'pointer' }}></img>
                        </div>
                    </div>

                </div>
                <div className={style.spacerThree}></div>
                <div className={style.spacerThree}></div>
                <button className={style.sendPrompt}>Подать заявку</button>
            </div>
        )
    }
}
