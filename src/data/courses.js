import axios from 'axios';

const BASE_URL = 'http://localhost:8080/njoy';

export const fetchAllLessons = () => axios.get(`${BASE_URL}/lessons`);
export const fetchLessonById = (id) => axios.get(`${BASE_URL}/lessons/${id}`);
export const fetchApprovedLessons = () => axios.get(`${BASE_URL}/lessons/approved`);
export const fetchActiveUsers = (id) => axios.get(`${BASE_URL}/activeUsers/${id}`);
export const fetchUserLessons = (id) => axios.get(`${BASE_URL}/user_lessons/${id}`);
export default fetchAllLessons;
