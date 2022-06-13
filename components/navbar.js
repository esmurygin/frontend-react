import React from 'react';
import style from '../styles/navbar.module.css'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={style.navigationPanelWrapper}>
                    <nav className={style.navigationPanel}>
                        <div>
                            <a href="/main" className={[style.navigationPanelItem, style.navigationPanelItemLogo].join(' ')}>
                                Nashe Delo
                            </a>
                        </div>
                        <div className={style.navigationPanelSpacer}></div>
                        <div>
                            <a href="/main" className={[style.navigationPanelItem, style.navigationPanelItemSelected].join(' ')}>
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
                                    <img src={"/static/searchIcon.svg"} alt="" />
                                </a>
                            </form>
                            <a href="/login">
                                <button className={[style.navigationPanelItem, style.navigationPanelLogin].join(' ')}>Войти</button>
                            </a>
                            <a href="/registration">
                                <button className={[style.navigationPanelItem, style.navigationPanelRegister].join(' ')}>Зарегистрироваться</button>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
