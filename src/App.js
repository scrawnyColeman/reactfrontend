import React from 'react';
import styled from 'styled-components';
import './App.css';
import Login from './components/Authentication/Login.jsx';
import Footer from './components/Footer/component';
import Header from './components/Header/component';
import ForumPage from './components/ForumPage/component';
import ForumPostPage from './components/ForumPostPage/component';
import HomePage from './components/HomePage/component';
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
    return (
        <Router>
            <Page className="App">
                <Header userName="ScrawnyColeman" />
                <Router history={history}>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home/:name" component={HomePage} />
                    <Route exact path="/home" component={HomePage} />
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
