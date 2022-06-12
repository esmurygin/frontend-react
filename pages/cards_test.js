import EventCard from '../components/eventCard'
import style from '../styles/eventCard.module.css'

export default function testCards() {
  return (
        <div style={{width: '100%', height: '100%', backgroundColor:'#EFF1FB', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
             <EventCard image={'/static/mch.png'}></EventCard>
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
             }}></div>
        </div>
  )
}