import React from 'react';
import style from '../styles/main.module.css'

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.loginChange = this.loginChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { login: "", password: "" }
    }


    render() {
        return (
            <div>
                <div className={style.navigationPanelWrapper}>
                    <nav className={style.navigationPanel}>
                        <div>
                            <a href="#" className={[style.navigationPanelItem, style.navigationPanelItemLogo].join(' ')}>
                                Nashe Delo
                            </a>
                        </div>
                        <div></div>
                        <div>
                            <a href="#" className={[style.navigationPanelItem, style.navigationPanelItemSelected].join(' ')}>
                                Главная
                            </a>
                            <a href="" className={style.navigationPanelItem}>
                                Наша карта
                            </a>
                            <a href=""  className={style.navigationPanelItem}>
                                FAQ
                            </a>
                            <form className={[style.navigationPanelItem, style.search].join(' ')} action="">
                                <input type="search" placeholder="Найдите доброе дело" required />
                                <a href="">
                                    <img src={"../styles/svg/mainPage_searchIcon.svg"} alt="" />
                                </a>
                            </form>
                            <a href="#">
                                <button className={[style.navigationPanelItem, style.navigationPanelLogin].join(' ')}>Войти</button>
                            </a>
                            <a href="#">
                                <button className={[style.navigationPanelItem, style.navigationPanelRegister].join(' ')}>Зарегистрироваться</button>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className={style.pageContent} >
                    <div className={style.spacer5}></div>
                    <div className={style.mainPageSection1}>
                        <div className={style.section1bars}>
                            <div className={style.barnashe}>
                                Nashe delo
                            </div>
                            <div className={style.flexSpacer}>

                            </div>
                            <div className={style.barvmeste}>
                                вместе
                            </div>
                        </div>
                        <div className={style.section1barandsection}>
                            <div className={style.barbolshe}>
                                больше добра
                            </div>
                            <div className={style.flexSpacer}>

                            </div>
                            <div className={style.section1section}>
                                Получай часы за добрые дела и получай за них подарки от партнёров.
                            </div>
                        </div>
                        <div className={style.section1buttons}>
                            <a href="#"><button class="main-page-btn-filled">Хочу помогать</button></a>
                            <a href="#"><button class="main-page-btn-empty">Стать организатором</button></a>
                        </div>
                    </div>
                    <div class="spacer-5"></div>
                    <div class="spacer-5"></div>
                    <div class="main-page-section-2">
                        <div class="section-2-section">
                            <h3 class="title">
                                Делай добро -
                                получай бонусы
                            </h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut et et egestas varius laoreet.
                                Et non in orci morbi amet, tellus faucibus. Et amet tincidunt turpis gravida semper tristique leo.
                            </p>
                            <a href="#"><button class="main-page-btn-black">Узнать подробнее</button></a>
                        </div>
                        <div class="section-2-image">
                            <img src="mainPage_cardsImage.png" alt="" />
                        </div>
                    </div>
                    <div class="spacer-5"></div>
                    <div class="spacer-5"></div>
                    <div class="spacer-5"></div>
                    <div class="spacer-5"></div>

                    <div class="faq">
                        <h3 class="faq__title">
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
                                            <div class="spacer-5"></div>
                                            <div class="spacer-5"></div>
                                            <div class="spacer-5"></div>
                                        </div>
                                        <footer class="nashe_delo_footer"></footer>
                                    </div>

                                    )      
    }
}