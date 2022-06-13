import MainNavbar from '../components/navbar'
import style from '../styles/organizationPage.module.css'
import OrganizationHat from '../components/organizationHat'
import Footer from '../components/footer'
import VolunteerCard from '../components/volunteerCard';
import SideScreen from '../components/sideScreen';
import React from 'react';
import Search from '../components/search';

export default class organisationVolunteers extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className={style.flexAlignColumn} style={{ width: '100%', backgroundColor: "#EFF1FB", }}>
            <MainNavbar></MainNavbar>
            <div className={style.pageContent}>
                <div className={style.spacerFive}></div>
                <OrganizationHat hatImg={'/static/hackathonHat.png'} organizationTitle={'Хакатон-клуб'} avatarImg={'/static/avatarImg.png'} ></OrganizationHat>
                <div className={style.sidebar}>
                    <SideScreen n='2'></SideScreen>
                    <div>
                    <h1 className={style.big}>Мои волонтёры</h1>
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
                                <VolunteerCard />
                                <VolunteerCard />
                            </div>
                            <div className={style.myEventsColumn}>
                                <VolunteerCard />
                                <VolunteerCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.spacerFiveFive}></div> */}

            <Footer></Footer>
        </div>
        )
    }
}