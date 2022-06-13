import MainNavbar from '../components/navbar'
import Footer from '../components/footer'
import style from '../styles/searchPage.module.css'
import SideFilters from '../components/sideFilters';
import SearchFilters from '../components/searchFilters';
import Navbar from '../components/navbar'
import ShortEventCard from '../components/shortEventCard'

export default function searchPage() {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div style={{ width: '100%', backgroundColor: "#EFF1FB", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className={style.spacerFive} ></div>
                <SearchFilters></SearchFilters>
                <div className={style.spacerFive} ></div>
                <h3 className={style.subtitleTitle}>Найдено 385 результатов</h3>
                <div className={style.spacerThree} ></div>

                <div className={style.flexRow}>
                    <SideFilters></SideFilters>
                    <div className={style.doubleColumn}>
                        <div className={style.flexRow} style={{flexWrap:"wrap"}}>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        <a href="/event_page"><ShortEventCard image="/static/hands.png" className={style.futureCard}></ShortEventCard></a>
                        </div>
                    </div>
                </div>

                <div className={style.spacerFive}></div>
                <Footer></Footer>
            </div>
        </div>

    )
}