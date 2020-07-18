import axios from 'axios';

const BASE_URL = `http://localhost:8080/njoy`;

export const fetchAllQuestionsByLessonId = (id) => axios.get(`${BASE_URL}/questions/lesson/${id}`);
export const fetchAllAnswersByLessonId = (id) => axios.get(`${BASE_URL}/questions/answers/lesson/${id}`);

export default fetchAllAnswersByLessonId;
