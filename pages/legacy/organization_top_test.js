import OrganizationHat from '../components/organizationHat'

export default function organizationPage() {
    return (
        <div style={{ width: '1200px', height: '100%' }}>
            <OrganizationHat hatImg={'/static/hackathonHat.png'} organizationTitle={'Хакатон-клуб'} avatarImg={'/static/avatarImg.png'} ></OrganizationHat>
        </div>
    )
}