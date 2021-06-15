import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import ValidationError from '../../../../errors/ValidationError.js';


interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {

  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if(userAlreadyExists) {
      throw new ValidationError('User email already exists!');
    }
  
    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
