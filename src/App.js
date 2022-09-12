import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {
    Routes,
    Route,
} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className='app-all'>
            <Header/>
            <NavbarContainer/>
            <div className='app-all-content'>
                <Routes>
                    <Route path='profile' element={<Profile/>}></Route>
                    <Route path='dialogs/*' element={<DialogsContainer/>}></Route>
                    <Route path='news' element={<News/>}></Route>
                    <Route path='music' element={<Music/>}></Route>
                    <Route path='users' element={<UsersContainer/>}></Route>
                    <Route path='settings' element={<Settings/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;