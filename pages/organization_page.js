import MainNavbar from '../components/navbar'
import style from '../styles/organizationPage.module.css'
import OrganizationHat from '../components/organizationHat'
import Footer from '../components/footer'

export default function organizationPage() {
    return (
        <div className={style.flexAlignColumn} style={{ width: '100%', backgroundColor: "#EFF1FB", }}>
            <MainNavbar></MainNavbar>
            <div className={style.pageContent}>
                <div className={style.spacerFive}></div>
                <OrganizationHat hatImg={'/static/hackathonHat.png'} organizationTitle={'Хакатон-клуб'} avatarImg={'/static/avatarImg.png'} ></OrganizationHat>
                <div className={style.organizationRows}>
                    <div className={style.navigationMenu}></div>
                    <div className={style.myEventsColumn}></div>
                </div>

            </div>
            {/* <div className={style.spacerFiveFive}></div> */}

            <Footer></Footer>
        </div>
    )
}