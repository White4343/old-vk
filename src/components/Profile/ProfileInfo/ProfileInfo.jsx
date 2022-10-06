import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import stockImg
    from "../../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const contacts = Object.values(props.profile.contacts)

    return (
        <div className={s.profile_block}>
            <img className={s.avatar}
                 src={props.profile.photos.large != null ? props.profile.photos.large : stockImg} alt={"avatar"}></img>
            <div className={s.about}>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    <ProfileStatus status={"Uganda forever"}/>
                </div>
                <div>
                    {props.profile.lookingForAJob ? <div>В поисках работы <div>
                        {props.profile.lookingForAJobDescription}
                    </div></div> : null}
                </div>
                <ul>
                    {contacts.map((c, i) => <div key={i}>
                        <li>
                            {c}
                        </li>
                    </div>)}
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;