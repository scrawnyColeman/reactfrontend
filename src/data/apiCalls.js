import axios from 'axios';

const BASE_URL = 'http://localhost:8080/njoy';

const authToken = sessionStorage.getItem('authToken');
const headers = { headers: { authorization: authToken } };

/****** Course fetchrequests *******/
export const fetchAllLessons = () => axios.get(`${BASE_URL}/lessons`, headers);
export const fetchLessonById = (id) => axios.get(`${BASE_URL}/lessons/${id}`, headers);
export const fetchApprovedLessons = () => axios.get(`${BASE_URL}/lessons/approved`, headers);
export const fetchActiveUsers = (id) => axios.get(`${BASE_URL}/activeUsers/${id}`, headers);
export const fetchUserLessons = (id) => {
    return axios.get(`${BASE_URL}/user_lessons/${id}`, headers);
};

/****** Forum fetch requests *******/
export const fetchAllForumPosts = () => axios.get(`${BASE_URL}/forum_posts`, headers);
export const fetchForumPostByLesson = (id) => axios.get(`${BASE_URL}/forum_posts/lesson/${id}`, headers);
export const fetchForumPost = (id) => axios.get(`${BASE_URL}/forum_posts/${id}`, headers);
export const fetchForumPostComments = (id) => axios.get(`${BASE_URL}/comments/post/${id}`, headers);

/****** Practicals fetch requests *******/
export const fetchPracticalByLessonId = (id) => axios.get(`${BASE_URL}/practicals/lesson/${id}`, headers);
export const fetchSolutionByPracticalId = (id) => axios.get(`${BASE_URL}/solutions/practical/${id}`, headers);

/****** Quizzes fetch requests *******/
export const fetchAllQuestionsByLessonId = (id) => axios.get(`${BASE_URL}/questions/lesson/${id}`, headers);
export const fetchAllAnswersByLessonId = (id) => axios.get(`${BASE_URL}/questions/answers/lesson/${id}`, headers);

/****** Languages fetch requests *******/
export const fetchAllLanguages = () => {
    axios.get(`${BASE_URL}/languages`, headers);
};
