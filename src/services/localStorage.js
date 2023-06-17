export default class localStorageService {
  static getToken(key) {
    console.log(key);
    return localStorage.getItem(key) || null;
  }

  static setToken(key, response) {
    console.log(response);
    let token = JSON.stringify(response?.data.token);
    console.log("TOKEN", token);
    token && localStorage.setItem(key, token);
  }

  static deleteToken() {
    localStorage.clear();
  }
}
