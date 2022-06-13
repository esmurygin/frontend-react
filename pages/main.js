import Main from '../components/main'
import style from '../styles/main.module.css'


export default function mainPage() {
  return (
        <div className={style.loginMain} style={{width: '100%', height: '100%'}}>
             <Main></Main>
        </div>
  )
}