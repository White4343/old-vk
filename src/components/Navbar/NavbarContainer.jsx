import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        navbarFriends: state.navbar.navbarFriends
    }
}

const NavbarContainer = connect(mapStateToProps, null) (Navbar)

export default NavbarContainer;