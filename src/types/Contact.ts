import User from "./User"
import { Message } from "./types"

export default class {
  user: User;
  message: Message;

  constructor(user: User, message: Message) {
    this.user = user;
    this.message = message;
  }

}