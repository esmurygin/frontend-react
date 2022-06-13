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
        this.state = { tasks: [], tags: {} }
        fetch('https://i-pro-backend.herokuapp.com/task').then(res => {
            res.json().then(res => {
                console.log(res);
                let temp = {}
                res.forEach((el)=>{
                    temp[el['id']] = ['Организация', 'Помощь']
                })
                this.setState({ tasks: res, tags: temp });
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
                                    <Search cb={(q)=>{
                                        if(q != ''){
                                            fetch(`http://i-pro-backend.herokuapp.com/task/search?search_query=${q}`).then(res=>{
                                                res.json().then(res=>{
                                                    console.log(res);
                                                    let temp = {}
                                                    res.forEach((el)=>{
                                                        temp[el['id']] = ['Организация', 'Помощь']
                                                    })
                                                    this.setState({ tasks: res, tags: temp });
                                                })
                                            })    
                                        }else{
                                            fetch('https://i-pro-backend.herokuapp.com/task').then(res => {
                                                res.json().then(res => {
                                                    console.log(res);
                                                    let temp = {}
                                                    res.forEach((el)=>{
                                                        temp[el['id']] = ['Организация', 'Помощь']
                                                    })
                                                    this.setState({ tasks: res, tags: temp });
                                                })
                                            })
                                        }
                                    }}></Search>
                                </div>
                                <div className={style.add}>
                                    <p className='p'>Добавить</p>
                                </div>
                            </div>
                            <div className={style.organizationRows}>
                                <div className={style.navigationMenu}>
                                    {this.state.tasks.map((el, t) => 
                                        (t % 2 == 0? <EventCard 
                                            name={el['name']} 
                                            description={el['description']}
                                             image_url={el['image_url']} 
                                             tags={this.state.tags[el['id']]}
                                             start_date={el['start_date']}
                                             end_date={el['end_date']}></EventCard>: '')
                                    )}
                                </div>
                                <div className={style.myEventsColumn}>
                                    {this.state.tasks.map((el, t) => 
                                        (t % 2 == 1? <EventCard 
                                             name={el['name']} 
                                             description={el['description']} 
                                             image_url={el['image_url']} 
                                             tags={this.state.tags[el['id']]}
                                             start_date={el['start_date']}
                                             end_date={el['end_date']}></EventCard>: '')
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
