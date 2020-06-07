import React from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './components/Authentication/Login.jsx';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import ForumPage from './components/ForumPage/component';
import UserPage from './components/UserPage/component';
import { footerHeight, headerHeight } from './constants/measures';

const Page = styled.div`
    display: grid;
    grid-template-rows: ${headerHeight} 1fr ${footerHeight};
`;

const App = () => (
    <Page className="App">
        {window.location.pathname === '/login' && <Login />}
        <Page>
            <Header userName={'Thomas'} />
            {window.location.pathname === '/home' && <UserPage />}
            {window.location.pathname === '/forum' && <ForumPage />}
            <Footer />
        </Page>
    </Page>
);

export default App;
