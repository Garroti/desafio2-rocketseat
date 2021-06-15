import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import ValidationError from '../../../../errors/ValidationError.js';

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User[] {

    const user = this.usersRepository.findById(user_id);

    if(!user) {
      throw new ValidationError('User not exists!');
    }

    if(!user.admin) {
      throw new ValidationError('User is not admin!');
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
