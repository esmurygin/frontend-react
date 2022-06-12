import VolunteerCard from '../components/volunteerCard'
import Footer from '../components/footer'
import style from '../styles/volunteerCard.module.css'

export default function testCards() {
   return (
      <div>
         <div style={{ width: '100%', height: '100%', backgroundColor: '#EFF1FB', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <VolunteerCard image={"/static/denis.png"}></VolunteerCard>
            {/* <div style={{
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
             }}></div> */}
         </div>
         <Footer></Footer>
      </div>

   )
}