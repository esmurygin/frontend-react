import MainNavbar from '../components/navbar'
import style from '../styles/organizationPage.module.css'
import OrganizationHat from '../components/organizationHat'
import Footer from '../components/footer'
import { volunteerCard } from '../components/volunteerCard';
import EventCard from '../components/eventCard';
import SideScreen from '../components/sideScreen';
import Search from '../components/search';
import React from 'react';

export default class organisationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] }
        fetch('https://i-pro-backend.herokuapp.com/task').then(res => {
            res.json().then(res => {
                console.log(res);
                this.setState({ tasks: res });
            })
        })
    }
    render() {
        return (
            <div className={style.flexAlignColumn} style={{ width: '100%', backgroundColor: "#EFF1FB", }}>
                <MainNavbar></MainNavbar>
                <div className={style.pageContent}>
                    <div className={style.spacerFive}></div>
                    <OrganizationHat hatImg={'/static/hackathonHat.png'} organizationTitle={'Хакатон-клуб'} avatarImg={'/static/avatarImg.png'} ></OrganizationHat>
                    <div className={style.sidebar}>
                        <SideScreen n='1'></SideScreen>
                        <div>
                            <h1 className={style.big}>Мои мероприятия</h1>
                            <div className={style.spacebtw}>
                                <div className={style.searchBar}>
                                    <Search></Search>
                                </div>
                                <div className={style.add}>
                                    <p className='p'>Добавить</p>
                                </div>
                            </div>
                            <div className={style.organizationRows}>
                                <div className={style.navigationMenu}>
                                    {this.state.tasks.map((el, t) => 
                                        (t % 2 == 0? <EventCard></EventCard>: '')
                                    )}
                                </div>
                                <div className={style.myEventsColumn}>
                                    {this.state.tasks.map((el, t) => 
                                        (t % 2 == 1? <EventCard></EventCard>: '')
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={style.spacerFiveFive}></div> */}

                <Footer></Footer>
            </div>
        );
    }
}
