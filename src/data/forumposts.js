import axios from 'axios';

export const fetchAllForumPosts = () => axios.get('http://localhost:8080/njoy/forum_posts');
export const fetchForumPost = (id) => axios.get(`http://localhost:8080/njoy/forum_posts/${id}`);
export const fetchForumPostComments = (id) => axios.get(`http://localhost:8080/njoy/comments/post/${id}`);

export default fetchAllForumPosts;
