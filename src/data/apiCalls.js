import axios from 'axios';

const BASE_URL = 'http://localhost:8080/njoy';
const authToken = sessionStorage.getItem('authToken');
const headers = { headers: { authorization: authToken } };

/****** Course fetchrequests *******/
export const fetchAllLessons = () => axios.get(`${BASE_URL}/lessons`, headers);

export const fetchLessonById = (id) => axios.get(`${BASE_URL}/lessons/${id}`, headers);

export const fetchApprovedLessons = () => axios.get(`${BASE_URL}/lessons/approved`, headers);

export const fetchUnapprovedLessons = () => axios.get(`${BASE_URL}/lessons/unapproved`, headers);

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
export const fetchAllLanguages = () => axios.get(`${BASE_URL}/languages`, headers);

/****** Users fetch requests *******/
export const fetchUserByUsernameOrEmail = (username, email) =>
    axios.get(`${BASE_URL}/user/${username}/${email}`, headers);

/****** Users update requests *******/
export const updateUserInfo = (userId, username, email) =>
    axios.put(`${BASE_URL}/users/${userId}/username/${username}/email/${email}`, headers);

/****** Users post requests *******/
export const setUserLesson = (userId, lessonId) => axios.post(`${BASE_URL}/user/${userId}/lesson/${lessonId}`, headers);

export const createForumPost = (post) => axios.post(`${BASE_URL}/forum_posts`, post, headers);

export const createComment = (comment, userId, postId) =>
    axios.post(`${BASE_URL}/comments/${userId}/${postId}`, comment, headers);

export const deleteComment = (commentId) => axios.put(`${BASE_URL}/comments/delete/${commentId}`, headers);

export const editComment = (commentId, comment) =>
    axios.put(`${BASE_URL}/comments/edit/${commentId}`, comment, headers);

export const deleteLesson = (lessonId) => axios.delete(`${BASE_URL}/lessons/delete/${lessonId}`, headers);

export const approveLesson = (lessonId) => axios.put(`${BASE_URL}/lessons/approve/${lessonId}`, headers);

export const postLesson = (lesson, languageId) => axios.post(`${BASE_URL}/lessons/new/${languageId}`, lesson, headers);

export const postQuestions = (questions, lessonId) =>
    axios.post(`${BASE_URL}/lessons/questions/new/${lessonId}`, questions, headers);

export const postAnswers = (answers, questionId) =>
    axios.post(`${BASE_URL}/lessons/answers/new/${questionId}`, answers, headers);

export const postPractical = (practical, lessonId) =>
    axios.post(`${BASE_URL}/lessons/practical/new/${lessonId}`, practical, headers);

export const postSolution = (solution, practicalId) =>
    axios.post(`${BASE_URL}/lessons/solutions/new/${practicalId}`, solution, headers);

export const setLessonComplete = (lessonId, userId) =>
    axios.put(`${BASE_URL}/lesson/complete/${lessonId}/${userId}`, headers);
