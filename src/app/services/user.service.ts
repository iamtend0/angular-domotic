import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {

  private users: User[] = [
    new User('Aurelien', 'Puget', 'aurelien.puget@atos.net', 'Ice tea',
              ['coder', 'lire'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
