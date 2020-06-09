import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ForumPreview from '../ForumPreview/component';
import ForumPostPage from '../ForumPostPage/component';
import data from '../../data/forumposts.js';
import CreateForumPost from '../CreateForumPost/component';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20vh 20px 0 20px;
`;

const ForumPage = () => {
    const location = useLocation().search;
    const [param, setParam] = useState(location);
    return (
        <StyledItemWrapper>
            {Boolean(param) ? (
                <ForumPostPage />
            ) : (
                <>
                    <ForumPreview posts={data.posts} onClick={setParam} />
                    <CreateForumPost />
                </>
            )}
        </StyledItemWrapper>
    );
};
export default ForumPage;
