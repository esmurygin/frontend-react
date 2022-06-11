import React from 'react';
import style from '../styles/login.module.css'

export default class login extends React.Component {
    constructor(props){
        super(props);
        this.loginChange = this.loginChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={ login:"", password:""}
    }

    loginChange(event) {
        this.setState({login : event.target.value})
        
    }

    passwordChange(event){
        this.setState({password : event.target.value})
    }

    
    handleSubmit(event){
        event.preventDefault();
        fetch('https://i-pro-backend.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=&username=${this.state.login}&password=${this.state.password}&scope=&client_id=&client_secret=`
        }).then((res)=>{
            if(res.status == 200){
                res.json().then((res)=>{
                    alert(res['access_token'])
                })
            }else{
                res.json().then((res)=>{
                    alert(res['detatils']);
                })
            }
        })
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit} className={style.login}>
                <h1 className={style.hed1special}>Nashe Delo</h1>
                <p className={style.par}>Ещё нет аккаунта? <a className={style.link}>Зарегестрироваться</a></p>
                <h1 className={style.hed1}>Вход</h1>
                <input className={style.inpLogin} value={this.state.login} placeholder="Электропочта*" onChange={this.loginChange}/>
                <input className={style.inpPassword} value={this.state.password} placeholder="Пароль*" onChange={this.passwordChange}/>
                <div className={style.rowSpecial}>
                    <input className={style.check} type="checkbox" id="memory"/><label for="memory" className={[style.lbl, style.extended].join(' ')}>Запомнить меня</label>
                    <a className={[style.link2, style.fontRegular].join(' ')}>Забыли пароль?</a>
                </div>
                <input type='submit' value='Войти' className={style.button}/>
                <input type='submit' value='Регистрация организатора' className={style.button2}/>
            </form>
        )      
    }
}