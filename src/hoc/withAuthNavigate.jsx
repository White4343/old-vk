import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component{
        render() {
            if(!this.props.isAuth){
                return <Navigate to='../login'/>
            }

            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps, null)(NavigateComponent)
}