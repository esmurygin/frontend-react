import React from 'react';
import styles from '../styles/sidescreen.module.css'

export default class SideScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className={styles.wrapper}>
                <div className={styles.balanceWrapper}>
                    <div className={styles.balance}>
                        <p className={styles.greyText}>Баланс компании</p>
                        6 379 ч.*
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={[styles.tab, styles.active].join(' ')}>
                        <div className={styles.pileIcon}></div>
                        <div className={styles.text}>Мои мероприятия</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.groupIcon}></div>
                        <div className={styles.text}>Мои волонтёры</div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.pileIcon}></div>
                        <div className={styles.text}>Заявки волонтёров</div>
                    </div>
                </div>
           </div>
        )
    }
}
