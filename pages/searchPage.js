import MainNavbar from '../components/navbar'
import Footer from '../components/footer'
import style from '../styles/searchPage.module.css'
import SideFilters from '../components/sideFilters';
import SearchFilters from '../components/searchFilters';
import Navbar from '../components/navbar'
import ShortEventCard from '../components/shortEventCard'
import React from 'react';

export default class searchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []}
        fetch('https://i-pro-backend.herokuapp.com/task').then(res => {
            res.json().then(res => {
                this.setState({data: res})
            })
        })
    }
    render(){
    return (
        <div>
            <MainNavbar></MainNavbar>
            <div style={{ width: '100%', backgroundColor: "#EFF1FB", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className={style.spacerFive} ></div>
                <SearchFilters></SearchFilters>
                <div className={style.spacerFive} ></div>
                <h3 className={style.subtitleTitle}>Найдено 385 результатов</h3>
                <div className={style.spacerThree}></div>

                <div className={style.flexRow}>
                    <SideFilters></SideFilters>
                    <div className={style.doubleColumn}>
                        <div className={style.flexRow} style={{flexWrap:"wrap"}}>
                            {this.state.data.map((r)=>
                                <ShortEventCard name={r.name} 
                                image_url={r.image_url} 
                                start_date={r.start_date} 
                                end_date={r.end_date}
                                id={r.id}></ShortEventCard>
                            )}
                        </div>
                    </div>
                </div>

                <div className={style.spacerFive}></div>
                <Footer></Footer>
            </div>
        </div>

    )
    }
}