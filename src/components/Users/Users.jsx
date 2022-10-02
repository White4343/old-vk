import s from "./Users.module.css";
import stockImg from "../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div>
        <div className={s.pageName}>
            Users
        </div>
        {
            props.users.map(u => <div className={s.userCard} key={u.id}>
                <div>
                    <div>
                        <NavLink to={'./../profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : stockImg} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      className={s.followActionButton}
                                      onClick={() => {
                                          props.unfollowUser(u.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      className={s.followActionButton}
                                      onClick={() => {
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
            {slicedPages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""} onClick={() => {
                    props.onPageChange(p)
                }} key={p}> {p} </span>
            })}
        </div>
    </div>
}

export default Users;