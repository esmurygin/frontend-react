import React from 'react';
import style from '../styles/eventCard.module.css'

export default class eventcard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.eventCard}>
                <img src={this.props.image} className={style.eventCardImage}/>
            </div>
        )
    }
}
