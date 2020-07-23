import axios from 'axios';

const BASE_URL = `http://localhost:8080/njoy`;

class AuthenticationService {
    executeBasicAuth = (username, password) =>
        axios.get(`${BASE_URL}/authenticate`, {
            headers: { authorization: `Basic ${window.btoa(`${username}:${password}`)}` },
        });

    logout() {
        sessionStorage.removeItem('activeUser');
        sessionStorage.removeItem('activeEmail');
        sessionStorage.removeItem('activeId');
        sessionStorage.removeItem('activeType');
        sessionStorage.removeItem('authToken');
    }
}

export default new AuthenticationService();
