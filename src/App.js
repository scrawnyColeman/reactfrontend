import React from 'react';
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
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LessonPage from './components/LessonPage/component';
import NotFound from './components/NotFound/component';
import TheoryPage from './components/TheoryPage/component';
import PracticalQuizPage from './components/PracticalQuizPage/component';
import FullLessonPage from './components/FullLessonPage/component';
import NewLessonPage from './components/NewLessonPage/component';
import ReviewLessonPage from './components/ReviewLessonPage/component';

const Page = styled.div`
    display: grid;
    grid-template-rows: ${headerHeight} 1fr ${footerHeight};
`;

const App = () => {
    const history = createBrowserHistory();
    const username = sessionStorage.getItem('activeUser') || null;
    return (
        <Router history={history}>
            <Page className="App">
                <Header username={username} />
                <Switch>
                    <Route exact path="/" render={() => <Login />} />
                    <Route exact path="/login" render={() => <Login />} />
                    <Route exact path="/profile/:name" component={ProfilePage} />
                    <Route exact path="/learn" component={LearnPage} />
                    <Route exact path="/learn/:id" component={LessonPage} />
                    <Route exact path="/learn/theory/:id" component={TheoryPage} />
                    <Route exact path="/learn/practical/:id" component={PracticalQuizPage} />
                    <Route exact path="/learn/lesson/:id" component={FullLessonPage} />
                    <Route exact path="/lessons/new" component={NewLessonPage} />
                    <Route exact path="/lessons/review" component={ReviewLessonPage} />
                    <Route exact path="/forum" component={ForumPage} />
                    <Route exact path="/forum/:id" component={ForumPostPage} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Page>
        </Router>
    );
};

export default App;
