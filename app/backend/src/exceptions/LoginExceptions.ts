import HttpException from './HttpException';

class LoginException extends HttpException {
  private static status = 401;

  constructor(message?:string) {
    super(LoginException.status, message || 'Invalid email or password');
  }
}

export default LoginException;
