import * as bcrypt from 'bcryptjs';
import Auth from '../utils/Auth';
import User from '../database/models/UserModel';
import ValidateLogin from './validations/validateUserData';
import InvalidLoginException from '../exceptions/LoginExceptions';

class LoginService {
  static async login(email:string, password: string): Promise<string> {
    ValidateLogin.validateAllFields(email, password);
    const user = await User.findOne({ where: { email } }) as User;
    if (!user) throw new InvalidLoginException('Invalid email or password');

    const resultBcrypt = bcrypt.compareSync(password, user.password);
    if (!resultBcrypt) throw new InvalidLoginException('Invalid email or password');

    const { id, username, role } = user;
    const token = Auth.generateToken({
      id,
      username,
      role,
      email,

    });
    return token;
  }
}

export default LoginService;
