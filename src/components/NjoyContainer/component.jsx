import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from '../Authentication/Login.jsx';
import Footer from '../Footer/component';
import Header from '../Header/component';
import ForumPage from '../ForumPage/component';
import ForumPostPage from '../ForumPostPage/component';
import ProfilePage from '../ProfilePage/component';
import { footerHeight, headerHeight } from '../../constants/measures';
import LearnPage from '../LearnPage/component';
import { Router, Route, Switch } from 'react-router-dom';
import LessonPage from '../LessonPage/component';
import NotFound from '../NotFound/component';
import TheoryPage from '../TheoryPage/component';
import PracticalQuizPage from '../PracticalQuizPage/component';
import FullLessonPage from '../FullLessonPage/component';
import NewLessonPage from '../NewLessonPage/component';
import ReviewLessonPage from '../ReviewLessonPage/component';

const Page = styled.div`
    display: grid;
    grid-template-rows: ${headerHeight} 1fr ${footerHeight};
`;

const NjoyApplication = ({ history }) => {
    const username = sessionStorage.getItem('activeUser');
    const [localUsername, setLocalUsername] = useState(null);

    useEffect(() => {
        username && setLocalUsername(username);
    }, [username]);

    return (
        <Router history={history}>
            <Page className="App">
                <Header username={localUsername} />
                <Switch>
                    <Route exact path="/" render={() => <Login setLocalUsername={() => setLocalUsername()} />} />
                    <Route exact path="/login" render={() => <Login setLocalUsername={() => setLocalUsername()} />} />
                    <Route exact path="/profile/:name" render={() => <ProfilePage username={localUsername} />} />
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

export default NjoyApplication;
