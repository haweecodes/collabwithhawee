import React from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import Feed from './components/Feed';
import SidebarRight from './components/SidebarRight';
import './styles/global.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <SidebarLeft />
                <Feed />
                <SidebarRight />
            </div>
        </div>
    );
}

export default App;
