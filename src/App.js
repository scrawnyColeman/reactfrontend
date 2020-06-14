import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './components/Authentication/Login.jsx';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import ForumPage from './components/ForumPage/component';
import ForumPostPage from './components/ForumPostPage/component';
import ProfilePage from './components/ProfilePage/component';
import { footerHeight, headerHeight } from './constants/measures';
import LearnPage from './components/LearnPage/component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Page = styled.div`
    display: grid;
    grid-template-rows: ${headerHeight} 1fr ${footerHeight};
`;

const App = () => {
    const history = createBrowserHistory();
    const [username, setUsername] = useState(sessionStorage.getItem('activeUser') || null);
    return (
        <Router>
            <Page className="App">
                <Header username={username} />
                <Router history={history}>
                    <Route exact path="/" render={() => <Login />} />
                    <Route exact path="/login" render={() => <Login />} />
                    <Route exact path="/profile/:name" component={ProfilePage} />
                    <Route exact path="/learn" component={LearnPage} />
                    <Route exact path="/forum" component={ForumPage} />
                    <Route exact path="/forum/:id" component={ForumPostPage} />
                </Router>
                <Footer />
            </Page>
        </Router>
    );
};

export default App;
