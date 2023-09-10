import LanguageList from './Language/LanguageList'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import './SideInfoSection.css'
import SkillList from './Skill/SkillList'

function SideInfoSection(){
    return (
        <div className='sideInfoSection'>
            <ProfilePicture/>
            <LanguageList/>
            <SkillList/>
        </div>
    )
}

export default SideInfoSection