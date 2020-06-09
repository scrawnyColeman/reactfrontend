import React from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './components/Authentication/Login.jsx';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import ForumPage from './components/ForumPage/component';
import HomePage from './components/HomePage/component';
import { footerHeight, headerHeight } from './constants/measures';
import LearnPage from './components/LearnPage/component';

const Page = styled.div`
    display: grid;
    grid-template-rows: ${headerHeight} 1fr ${footerHeight};
`;

const App = () => {
    if (window.location.pathname === '/') {
        window.location.pathname = '/login';
    }
    return (
        <Page className="App">
            {window.location.pathname === '/login' && <Login />}
            <Page>
                {window.location.pathname !== '/login' && <Header userName={'ScrawnyColeman'} />}
                {window.location.pathname === '/home' && <HomePage />}
                {window.location.pathname === '/learn' && <LearnPage />}
                {window.location.pathname === '/forum' && <ForumPage />}
                {window.location.pathname !== '/login' && <Footer />}
            </Page>
        </Page>
    );
};

export default App;
