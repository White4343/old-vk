import React from "react";
import s from './Users.module.css';
import axios from "axios";
import stockImg from "../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        })
    }

    onPageChange = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={s.pageName}>
                Users
            </div>
            {
                this.props.users.map(u => <div className={s.userCard} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : stockImg} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.followActionButton} onClick={() => {
                                    this.props.unfollowUser(u.id)
                                }}>Unfollow</button>
                                : <button className={s.followActionButton} onClick={() => {
                                    this.props.followUser(u.id)
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
                    return <span className={this.props.currentPage === p ? s.selectedPage : ""} onClick={() => {
                        this.onPageChange(p)
                    }} key={p}> {p} </span>
                })}
            </div>
        </div>
    }
}

export default Users;