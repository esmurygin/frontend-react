import React from 'react';
import style from '../styles/search.module.css'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form className={[style.navigationPanelItem, style.search].join(' ')} action="">
                    <input onChange={(e) => { this.props.cb(e.target.value) }} type="search" placeholder="Поиск" required />
                    <a href="">
                        <img src={"/static/searchIcon.svg"} alt="" />
                    </a>
                </form>
            </div>
        )
    }
}