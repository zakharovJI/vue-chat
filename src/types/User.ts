export default class User {
  private _image: string;
  private _login: string;

  constructor(image: string, login: string) {
    this._image = image;
    this._login = login;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

}