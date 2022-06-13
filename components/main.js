import React from 'react';
import style from '../styles/main.module.css'
import Navbar from './navbar';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={style.mainBody}>
                <Navbar></Navbar>
                <div className={style.pageContent} >
                    <div className={style.spacer5}></div>
                    <div className={style.mainPageSection1}>
                        <div className={style.section1bars}>
                            <div className={[style.bar, style.nashe].join(' ')}>
                                Nashe delo
                            </div>
                            <div className={style.flexSpacer}>

                            </div>
                            <div className={[style.bar, style.vmeste].join(' ')}>
                                вместе
                            </div>
                        </div>
                        <div className={style.section1barandsection}>
                            <div nclassName={style.barbolshe}>
                                больше добра
                            </div>
                            <div className={style.flexSpacer}>

                            </div>
                            <div className={style.section1section}>
                                Получай часы за добрые дела и получай за них подарки от партнёров.
                            </div>
                        </div>
                        <div className={style.section1buttons}>
                            <a href="#"><button className="main-page-btn-filled">Хочу помогать</button></a>
                            <a href="#"><button className="main-page-btn-empty">Стать организатором</button></a>
                        </div>
                    </div>
                    <div className="spacer-5"></div>
                    <div className="spacer-5"></div>
                    <div className="main-page-section-2">
                        <div className="section-2-section">
                            <h3 className="title">
                                Делай добро -
                                получай бонусы
                            </h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius laoreet.
                                Et non in orci morbi amet, tellus faucibus. Et amet tincidunt turpis gravida semper tristique leo.
                            </p>
                            <a href="#"><button className="main-page-btn-black">Узнать подробнее</button></a>
                        </div>
                        <div className="section-2-image">
                            <img src="mainPage_cardsImage.png" alt="" />
                        </div>
                    </div>
                    <div className="spacer-5"></div>
                    <div className="spacer-5"></div>
                    <div className="spacer-5"></div>
                    <div className="spacer-5"></div>

                    <div className="faq">
                        <h3 className="faq__title">
                            Частые вопросы
                        </h3>
                        <ul>
                            <hr></hr>
                                <li>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius
                                        laoreet?</h4>
                                    <a href=""><img src="mainPage_plusIcon.svg" alt="" /></a>
                                </li>
                                <hr></hr>
                                    <li>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius
                                            laoreet?</h4>
                                        <a href=""><img src="mainPage_plusIcon.svg" alt="" /></a>
                                    </li>
                                    <hr></hr>
                                        <li>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius
                                                laoreet?</h4>
                                            <a href=""><img src="mainPage_plusIcon.svg" alt="" /></a>
                                        </li>
                                        <hr></hr>
                                            <li>
                                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
                                                <a href=""><img src="mainPage_plusIcon.svg" alt="" /></a>
                                            </li>
                                            <hr></hr>
                                                <li>
                                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
                                                    <a href=""><img src="mainPage_plusIcon.svg" alt="" /></a>
                                                </li>
                                                <hr></hr>
                                                </ul>
                                            </div>
                                            <div className="spacer-5"></div>
                                            <div className="spacer-5"></div>
                                            <div className="spacer-5"></div>
                                        </div>
                                        <footer className="nashe_delo_footer"></footer>
                                    </div>

                                    )      
    }
}
