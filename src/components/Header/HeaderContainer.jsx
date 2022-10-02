import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUsersData, toggleIsAuth} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authUser().then(data => {
                if(data.resultCode === 0){
                    let {id, email, login} = data.data
                    this.props.setAuthUsersData(id, email, login)
                    this.props.toggleIsAuth(true)
                }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUsersData, toggleIsAuth})(HeaderContainer);