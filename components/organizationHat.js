import React from 'react';
import style from '../styles/organizationHat.module.css'

export default class organizationhat extends React.Component {

    constructor(props) {
        super(props);
        this.organizationTitle = this.props.organizationTitle;
        this.hatImg = this.props.hatImg;
        this.avatarImg = this.props.avatarImg;
    }

    render() {
        return (
            <div className={style.organizationHat} style={{ background: `url(${this.hatImg})` }}>
                <button className={style.updateBgButton}>
                    <img src={"/static/camera.svg"}></img> <div style={{ marginLeft: '0.5rem' }}>Обновить фото обложки</div>
                </button>


                <div className={style.organizationAvatarBox} style={{ background: `url(${this.avatarImg})`, backgroundSize:"scale", backgroundImage:'no-repeat' }}>
                    <button className={style.changeAvatarImgBtn}>
                        <img src={"/static/camera.svg"}></img> <div style={{marginLeft:'0.5rem'}}>Обновить</div>
                    </button>
                </div>

                <div className={style.organizationTitle}>
                    <h2 className={style.organizationTitleTitle}>Организация {this.organizationTitle}</h2>
                    <button className={style.organizationEditButton}><img src={"/static/editPencil.svg"}></img></button>
                </div>


            </div>
        )
    }
}
