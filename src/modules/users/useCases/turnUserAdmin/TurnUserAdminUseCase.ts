import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import NotFoundError from '../../../../errors/NotFoundError.js';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {

    const user = this.usersRepository.findById(user_id);

    if(!user) {
      throw new NotFoundError('User not exists!');
    }

    const categories = this.usersRepository.turnAdmin(user);

    return categories;
  }
}

export { TurnUserAdminUseCase };
