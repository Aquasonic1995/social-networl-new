import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import Friends from './components/Friends/Friends';
import {stateType} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./Redux/redux-store";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header/>
                    <div className="wrapper">
                        <Sidebar/>
                        <main className="content">
                            <Routes>
                                <Route path="/profile/*" element={<Profile/>}/>
                                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                                <Route path="/friends" element={<Friends cardFriends={store.getState().FriendsPage.cardFriends}/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                            </Routes>
                        </main>
                    </div>
                </div>
                <Dropdown/>
            </div>
        </BrowserRouter>
    );
}

export default App;
