class AuthenticationService {
    registerLogin(username, email, id, userType) {
        sessionStorage.setItem('activeUser', username);
        sessionStorage.setItem('activeEmail', email);
        sessionStorage.setItem('activeId', id);
        sessionStorage.setItem('activeType', 'admin');
    }
    destroyLogin() {
        sessionStorage.removeItem('activeUser');
        sessionStorage.removeItem('activeEmail');
        sessionStorage.removeItem('activeId');
        sessionStorage.removeItem('activeType');
    }
}

export default new AuthenticationService();
