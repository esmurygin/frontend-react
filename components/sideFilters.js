import React from 'react';
import style from '../styles/sideFilter.module.css'

export default class SideFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {format: '', 
            all: false, children: false, teenagers: false, students: false,
            freeFood: false, theatre: false, thanks: false, paidLiving: false,
            individual: false, car: false, psychological: false, souvenirs: false
        }
    }
    render() {
        return (
            <div className={style.tasksMain}>
                <div className={[style.header1, style.firstHeader].join(' ')}><h1 className={style.big}>Формат проведения</h1></div>
                <div onChange={(e)=>this.setState({format: e.target.value})} className={style.lists1}>
                    <div className={style.pair}><input type="radio" id="radio1" value='both'></input><label htmlFor="radio1" className={style.text}>Все</label></div>
                    <div className={style.pair}><input type="radio" id="radio2" value='online'></input><label htmlFor="radio2" className={style.text}>Онлайн</label></div>
                    <div className={style.pair}><input type="radio" id="radio3" value='offline'></input><label htmlFor="radio3" className={style.text}>Оффлайн</label></div>
                </div>
                <div className={style.header1}><h1 className={style.big}>Возрастное ограничение</h1></div>
                <div className={style.lists1}>
                <div className={style.pair}><input type="checkbox" id="checkbox1" onChange={e=>this.setState({all:e.target.checked})}></input><label htmlFor="checkbox1" className={style.text}>Все</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox2" onChange={e=>this.setState({children:e.target.checked})}></input><label htmlFor="checkbox2" className={style.text}>До 14</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox3" onChange={e=>this.setState({teenagers:e.target.checked})}></input><label htmlFor="checkbox3" className={style.text}>с 14 до 18</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox4" onChange={e=>this.setState({students:e.target.checked})}></input><label htmlFor="checkbox4" className={style.text}>От 18</label></div>
                </div>
               
                <div className={style.header1}><h1 className={style.big}>Условия</h1></div>
                <div className={style.lists1}>
                <div className={style.pair}><input type="checkbox" id="checkbox4" onChange={e=>this.setState({students:e.target.checked})}></input><label htmlFor="checkbox4" className={style.text}>От 18</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox5" onChange={e=>this.setState({freeFood:e.target.checked})}></input><label htmlFor="checkbox5" className={style.text}>Бесплатное питание</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox6" onChange={e=>this.setState({theatre:e.target.checked})}></input><label htmlFor="checkbox6" className={style.text}>Билеты в театр</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox7" onChange={e=>this.setState({thanks:e.target.checked})}></input><label htmlFor="checkbox7" className={style.text}>Благодарности</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox8" onChange={e=>this.setState({paidLiving:e.target.checked})}></input><label htmlFor="checkbox8" className={style.text}>Оплата проживаиния</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox9" onChange={e=>this.setState({individual:e.target.checked})}></input><label htmlFor="checkbox9" className={style.text}>Персональное обучение</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox10" onChange={e=>this.setState({car:e.target.checked})}></input><label htmlFor="checkbox10" className={style.text}>Проезд</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox11" onChange={e=>this.setState({psychological:e.target.checked})}></input><label htmlFor="checkbox11" className={style.text}>Психологическая консультация</label></div>
                <div className={style.pair}><input type="checkbox" id="checkbox12" onChange={e=>this.setState({souvenirs:e.target.checked})}></input><label htmlFor="checkbox12" className={style.text}>Сувенирная продукция</label></div>
                </div>
                
            </div>
        )
    }
}