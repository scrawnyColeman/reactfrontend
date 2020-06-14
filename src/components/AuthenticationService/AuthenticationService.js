class AuthenticationService {
    registerLogin(username) {
        sessionStorage.setItem('activeUser', username);
        console.log('registered');
    }
    destroyLogin() {
        sessionStorage.removeItem('activeUser');
        console.log('logged out');
    }
}

export default new AuthenticationService();
