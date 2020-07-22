export default class User {
  avatar: string;
  login: string;
  id: number;

  constructor(image: string, login: string, id: number) {
    this.avatar = image;
    this.login = login;
    this.id = id;
  }
}