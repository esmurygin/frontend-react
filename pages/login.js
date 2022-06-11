import Login from '../components/login'
import style from '../styles/login.module.css'

export default function loginPage() {
  return (
        <div className={style.loginMain} style={{width: '100%', height: '100%'}}>
             <Login></Login>
             <div style={{
                position: 'fixed',
                bottom: '0.25em',
                width: '100%',
                textAlign: 'center',
                fontFamily: 'regular'
             }}>© I PRO. MoscowCityHack 2022</div>
             <div style={{
                position: 'fixed',
                bottom: '0.25em',
                right: '7em',
                textAlign: 'center'
             }}><button>????</button></div>
        </div>
  )
}