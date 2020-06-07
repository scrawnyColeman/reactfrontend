import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './components/Authentication/Login.jsx';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import UserPage from './components/UserPage/component';
import { footerHeight, headerHeight } from './constants/measures';

const Page = styled.div`
    display: grid;
    grid-template-rows: ${headerHeight} 1fr ${footerHeight};
`;

const App = () => {
    // should default to false
    const [isLoggedIn] = useState(true);
    return (
        <Page className="App">
            {isLoggedIn ? <Header userName={'Thomas'} /> : <div />}
            {!isLoggedIn ? <Login /> : <UserPage />}
            <Footer />
        </Page>
    );
};

export default App;
