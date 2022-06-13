import React from 'react';
import style from '../styles/footer.module.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className={style.footer}>
                <div className={style.footerFrame}>
                    <div className={style.footerContent}>
                        <h3 className={style.footerTitle}>NasheDelo</h3>
                        <div className={style.footerColumnContainer}>
                            <div className={style.footerColumn}>
                                <h5 className={style.footerColumnTitle} style={{marginRight:'70px'}}>Карта сайта</h5>
                                <a className={style.footerColumnElem}>Главная</a>
                                <a className={style.footerColumnElem}>Наша карта</a>
                                <a className={style.footerColumnElem}>Faq</a>
                            </div>
                            <div className={style.footerColumn}>
                                <h5 className={style.footerColumnTitle}>Контакты</h5>
                            </div>
                            <div className={style.flexGrow}></div>
                            <div className={style.footerColumn}>
                                <h5 className={style.footerColumnTitle}>Дополнительно</h5>
                                <a className={style.footerColumnElem}>Политика конфиденциальности</a>
                                <a className={style.footerColumnElem}>Интеллектуальная собственность</a>
                                <a className={style.footerColumnElem}>Attribution</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}