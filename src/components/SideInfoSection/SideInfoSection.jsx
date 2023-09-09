import LanguageList from './Language/LanguageList'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import './SideInfoSection.css'

function SideInfoSection(){
    return (
        <div className='sideInfoSection'>
            <ProfilePicture/>
            <LanguageList/>
        </div>
    )
}

export default SideInfoSection