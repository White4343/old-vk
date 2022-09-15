import s from "./Users.module.css";
import stockImg from "../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.pageName}>
            Users
        </div>
        {
            props.users.map(u => <div className={s.userCard} key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : stockImg} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={s.followActionButton} onClick={() => {
                                props.unfollowUser(u.id)
                            }}>Unfollow</button>
                            : <button className={s.followActionButton} onClick={() => {
                                props.followUser(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.userCardInfo}>
                    <div>
                        <div className={s.userCardName}>
                            {u.name}
                        </div>
                        <div className={s.userCardStatus}>
                            {u.status}
                        </div>
                    </div>
                    <div className={s.userCardLocation}>
                        <div>
                            {/*{u.location.city},*/}
                        </div>
                        <div>
                            {/*{u.location.country}*/}
                        </div>
                    </div>
                </div>
            </div>)
        }
        <div className={s.pageSelector}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""} onClick={() => {
                    props.onPageChange(p)
                }} key={p}> {p} </span>
            })}
        </div>
    </div>
}

export default Users;