import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ForumPreview from '../ForumPreview/component';
import ForumPostPage from '../ForumPostPage/component';
import { errorLogger } from '../../data/errorLogger.js';
import { fetchAllForumPosts } from '../../data/apiCalls.js';
import CreateForumPost from '../CreateForumPost/component';
import Error from '../LoginError/component';

const StyledItemWrapper = styled.div`
    margin: 20vh 20px 0;
`;
const Container = styled.div``;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4px;
`;

const ForumPage = () => {
    const location = useLocation().search;
    const [data, setData] = useState([]);
    const [param, setParam] = useState(location);

    useEffect(() => {
        fetchAllForumPosts()
            .then((response) => {
                setData(response.data);
            })
            .catch(errorLogger);
    }, []);

    return (
        <StyledItemWrapper>
            {param ? (
                <ForumPostPage />
            ) : (
                <Container>
                    <Wrapper>
                        <ForumPreview posts={data} onClick={setParam} param={param} />
                        <CreateForumPost />
                    </Wrapper>
                </Container>
            )}
        </StyledItemWrapper>
    );
};
export default ForumPage;
