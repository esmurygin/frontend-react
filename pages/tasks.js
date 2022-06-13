import MainNavbar from '../components/navbar'
import style from '../styles/tasks.module.css'
import Footer from '../components/footer'
import SideFilters from '../components/sideFilters'
import Search from '../components/search'

export default function tasksPage() {
    return (
        <div className={style.flexAlignColumn} style={{ width: '100%', backgroundColor: "#EFF1FB", }}>
            <MainNavbar></MainNavbar>
            <SideFilters></SideFilters>
            <Footer></Footer>
        </div>
    )
}