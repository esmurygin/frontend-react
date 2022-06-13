import React from 'react';
import style from '../styles/registration.module.css'
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
            </form>
        )      
    }
}