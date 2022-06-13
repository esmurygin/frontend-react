import MainNavbar from '../components/navbar'
import style from '../styles/eventPage.module.css'
import Footer from '../components/footer'
import EventPageCard from '../components/eventPageCard'
import {useRouter} from 'next/router'
import { useState } from 'react'
import React from 'react'

export default class EventPage extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.router.query['id']);
        this.state = {data:{}, d: new Date(), dd: new Date()}
        fetch('https://i-pro-backend.herokuapp.com/task').then((r)=>{
            r.json().then(r=>{
                r.forEach(e=>{
                    if(e.id == this.props.router.query['id']){
                        console.log(e);
                        this.setState({data: e,d: new Date(e.start_date),dd: new Date(e.end_date)});
                        this.render();
                    }
                })
            })
        })
    }
    render(){
        return (
            <div>
            <MainNavbar></MainNavbar>
            <div className={style.flexAlignColumn} style={{ width: '100%', backgroundColor: "#EFF1FB", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <div className={style.spacerThree}></div>
                <div className={style.pageContent} style={{ alignItems: 'flex-start', paddingLeft: '130px' }}>
                    <div className={style.navigationRoute}>
                        <a className={style.link} href="#">Главная /</a>
                        <a className={style.link} href="#">Мероприятия /</a>
                        <a className={style.link} style={{ color: 'black' }} href="#">Отбор волонтёро...</a>
                    </div>
                </div>
                <div className={style.spacerThree}></div>
                <div className={style.pageContent}>
                

                    <EventPageCard
                        title={this.state.data['name']}
                        organizatorName="Ассоциация волонтёрских центров"
                        dates={`С ${this.state.d.getDate()}.${this.state.d.getMonth()} ${this.state.d.getHours()}:${this.state.d.getMinutes()} по ${this.state.dd.getDate()}.${this.state.dd.getMonth()} ${this.state.dd.getHours()}:${this.state.dd.getMinutes()}`}
                        place="Россия, г. Москва"
                        description={this.state.data.description}
                        reward="8ч"
                        preview={this.state.data.image_url}
                        organizatorImg="/static/avc.png"
                    ></EventPageCard>


                </div>
                <div className={style.pageContent} style={{ alignItems: 'flex-start' }}>
                    <div className={style.spacerThree}></div>
                    <h3 className={style.subtitleTitle}>Может понравиться</h3>
                    <div className={style.spacerThree}></div>
                    <div className={style.recommendationGrid}>
                        <div className={style.recommendationCard} style={{ gridRowStart: '1', gridRowEnd: '3', gridColumnStart: '1', gridColumnEnd: '2' }}>
                            <h3 className={style.subtitleTitle}>Гуманитарная миссия</h3>
                            <img className={style.recommendationCardImg} src={'/static/child.png'}></img>
                        </div>
                        <div className={style.recommendationCard} style={{ flexDirection: 'row', gridRowStart: '1', gridRowEnd: '2', gridColumnStart: '2', gridColumnEnd: '4' }} >
                            <div style={{ paddingRight: '1.5rem' }}>
                                <h3 className={style.subtitleTitle}>Формула 1</h3>
                                <p className={style.descriptionRecommendation}>Системная организация процесса сбора заветных желаний детей в  медицинских и социальных учреждениях</p>
                            </div>
                            <img className={style.recommendationCardImg} src={'/static/racer.png'} style={{ minWidth: '300px', minHeight: '300px' }}></img>
                        </div>
                        <div className={style.recommendationCard} style={{ gridRowStart: '2', gridRowEnd: '3', gridColumnStart: '2', gridColumnEnd: '3' }}>
                            <h3 className={style.subtitleTitle}>Добро театр</h3>
                            <p className={style.descriptionRecommendation}>Системная организация процесса сбора заветных желаний детей в  медицинских и социальных учреждениях</p>
                        </div>
                        <div className={style.recommendationCard} style={{ gridRowStart: '2', gridRowEnd: '3', gridColumnStart: '3', gridColumnEnd: '4' }}>
                            <h3 className={style.subtitleTitle}>Моя миссия</h3>
                            <p className={style.descriptionRecommendation}>Системная организация процесса сбора заветных желаний детей в  медицинских и социальных учреждениях</p>
                        </div>
                        <div className={style.recommendationCard} style={{
                            backgroundColor: '#a4508b',
                            backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)'
                            , backgroundClip: 'rect()', gridRowStart: '1', gridRowEnd: '2', gridColumnStart: '4', gridColumnEnd: '5'
                        }}>
                            <h3 className={style.subtitleTitle} style={{ color: 'white' }}>Мечтай со мной</h3>
                            <p className={style.descriptionRecommendation} style={{ color: 'white' }}>Системная организация процесса сбора заветных желаний детей в  медицинских и социальных учреждениях</p>

                        </div>
                        <div className={style.recommendationCard} style={{ gridRowStart: '2', gridRowEnd: '3', gridColumnStart: '4', gridColumnEnd: '5' }}>
                            <h3 className={style.subtitleTitle}>Создай It-проект</h3>
                            <p className={style.descriptionRecommendation}>Системная организация процесса сбора заветных желаний детей в  медицинских и социальных учреждениях</p>
                        </div>

                    </div>
                    <div className={style.spacerThree}></div>
                    <button class={style.spaceButton}>Посмотреть ещё 257</button>
                </div>
                <div className={style.spacerFive}></div>

                <Footer></Footer>
            </div>
        </div>
        );
    }
   
}