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
                <input className={style.inp} value={this.state.login} onChange={this.loginChange}/>
                <input className={style.inp} value={this.state.password} onChange={this.passwordChange}/>
                <input type='submit' value='Submit'/>
            </form>
        )      
    }
}