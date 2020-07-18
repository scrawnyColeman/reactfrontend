import axios from 'axios';

const BASE_URL = `http://localhost:8080/njoy`;
export const fetchPracticalByLessonId = (id) => axios.get(`${BASE_URL}/practicals/lesson/${id}`);
export const fetchSolutionByPracticalId = (id) => axios.get(`${BASE_URL}/solutions/practical/${id}`);

export default fetchPracticalByLessonId;
