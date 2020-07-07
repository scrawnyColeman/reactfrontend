import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ForumPreview from '../ForumPreview/component';
import ForumPostPage from '../ForumPostPage/component';
import { errorLogger } from '../../data/errorLogger.js';
import { fetchAllForumPosts } from '../../data/forumposts.js';
import CreateForumPost from '../CreateForumPost/component';

const StyledItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20vh 20px 0 20px;
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
    }, []); //call when data changes

    console.log(data);
    return (
        <StyledItemWrapper>
            {param ? (
                <ForumPostPage />
            ) : (
                <>
                    <ForumPreview posts={data} onClick={setParam} />
                    <CreateForumPost />
                </>
            )}
        </StyledItemWrapper>
    );
};
export default ForumPage;
