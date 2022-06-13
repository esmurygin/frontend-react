import React from 'react';
import style from '../styles/registration.module.css'
import TextField from '@mui/material/TextField';

export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.loginChange = this.loginChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.surnameChange = this.surnameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={ login:"", password:"", name:"", surname:""}
    }

    loginChange(event) {
        this.setState({login : event.target.value})
        
    }

    passwordChange(event){
        this.setState({password : event.target.value})
    }

    nameChange(event){
        this.setState({name : event.target.value})
    }

    surnameChange(event){
        this.setState({surname : event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://i-pro-backend.herokuapp.com/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${this.state.login}&password=${this.state.password}&name=${this.state.name}&surname=${this.state.surname}`
        }).then((res)=>{
            if(res.status == 200){
                document.location.href = '/login';
            }else{
                res.json().then((res)=>{
                    alert(res['detatils']);
                })
            }
        });

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.name} onChange={this.nameChange}/>
                <input value={this.state.surname} onChange={this.surnameChange}/>
                <input value={this.state.login} onChange={this.loginChange}/>
                <input value={this.state.password} onChange={this.passwordChange}/>
                <input type='submit' value='Submit'/>
                <form onSubmit={this.handleSubmit} className={style.login}>
                <h1 className={style.hed1special}>Nashe Delo</h1>
                <p className={style.par}>Уже зарегестрированны? <a className={style.link}>Войти</a></p>
                <h1 className={style.hed1}>Регистрация</h1>
                <TextField className={style.inpName} id="outlined-basic" label="Имя*" variant="outlined" value={this.state.login} onChange={this.nameChange} />
                <TextField className={style.inpSurname} id="outlined-basic" label="Фамилия*" variant="outlined" value={this.state.password} onChange={this.passwordChange} />
                
                <div className={style.rowSpecial}>
                    <input className={style.check} type="checkbox" id="memory"/><label htmlFor="memory" className={[style.lbl, style.extended].join(' ')}>Запомнить меня</label>
                    <a className={[style.link2, style.fontRegular].join(' ')}>Забыли пароль?</a>
                </div>
                <input type='submit' value='Войти' className={style.button} />
                <input type='submit' value='Регистрация организатора' className={style.button2} />
            </form>
            </form>
        )      
    }
}