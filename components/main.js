import React from 'react';
import style from '../styles/main.module.css'
import Navbar from './navbar';
import Footer from './footer';

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
                            <div className={[style.bar, style.bolshe].join(' ')}>
                                больше добра
                            </div>
                            <div className={style.flexSpacer}>

                            </div>
                            <div className={style.section1section}>
                            Станьте волонтером, чтобы помогать
                                        другим и получать уникальный опыт
                            </div>
                        </div>
                        <div className={style.section1buttons}>
                            <a href="/searchPage"><button className={style.mainpagebtnfilled}>Хочу помогать</button></a>
                            <a href="/organisationTasks"><button className={style.mainpagebtnempty}>Стать организатором</button></a>
                        </div>
                    </div>
                    <div className={style.spacer5}></div>
                    <div className={style.spacer5}></div>
                    <div className={style.mainpagesection2}>
                        <div className={style.section2section}>
                            <h3 className={style.title}>
                                Делай добро -
                                получай бонусы
                            </h3>
                            <p className={style.description}>
                            Зарабатывай часы за добрые дела и получай за них подарки от партнёров.
                            </p>
                            <a href="#"><button className={style.mainpagebtnblack}>Узнать подробнее</button></a>
                        </div>
                        <div className={style.section2image}>
                            <img src={"/static/mainPage_cardsImage.png"} alt="" />
                        </div>
                    </div>
                    <div className={style.spacer5}></div>
                    <div className={style.spacer5}></div>
                    <div className={style.spacer5}></div>
                    <div className={style.spacer5}></div>

                    <div className={style.faq}>
                        <h3 className={style.faqTitle}>
                            Частые вопросы
                        </h3>
                        <ul>
                            <hr></hr>
                            <li>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius
                                    laoreet?</h4>
                                <a href=""><img src="/static/mainPage_plusIcon.svg" alt="" /></a>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius
                                    laoreet?</h4>
                                <a href=""><img src="/static/mainPage_plusIcon.svg" alt="" /></a>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius
                                    laoreet?</h4>
                                <a href=""><img src="/static/mainPage_plusIcon.svg" alt="" /></a>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
                                <a href=""><img src="/static/mainPage_plusIcon.svg" alt="" /></a>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h4>
                                <a href=""><img src="/static/mainPage_plusIcon.svg" alt="" /></a>
                            </li>
                            <hr></hr>
                        </ul>
                    </div>
                    <div className={style.spacer5}></div>
                    <div className={style.spacer5}></div>
                    <div className={style.spacer5}></div>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}
