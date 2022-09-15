import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
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
        return <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                      users={this.props.users} unfollowUser={this.props.unfollowUser}
                      followUser={this.props.followUser} onPageChange={this.onPageChange}
                      currentPage={this.props.currentPage}
        />
    }
}

export default UsersAPI;