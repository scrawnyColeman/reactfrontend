import axios from 'axios';

const BASE_URL = 'http://localhost:8080/njoy';

export const fetchAllForumPosts = () => axios.get(`${BASE_URL}/forum_posts`);
export const fetchForumPostByLesson = (id) => axios.get(`${BASE_URL}/forum_posts/lesson/${id}`);
export const fetchForumPost = (id) => axios.get(`${BASE_URL}/forum_posts/${id}`);
export const fetchForumPostComments = (id) => axios.get(`${BASE_URL}/comments/post/${id}`);

export default fetchAllForumPosts;
