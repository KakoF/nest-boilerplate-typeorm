import { LoginRequestDto } from './dtos/login-request.dto';
import { LoginResponseDto } from './dtos/login-response.dto';
import { LoginController } from './login.controller';
import { ILogin } from './use-cases/login.interface';

interface SutTypes {
  sut: LoginController
  _loginService: ILogin
}

const loginService = (): ILogin => {
  class Login implements ILogin {
    login(login: LoginRequestDto): Promise<any> {
      return Promise.resolve({
        user: {
          id: '1',
          name: 'user',
          role: 'role'
        },
        payload: {
          type: "bearer",
          token: "asdasdas.asdasdas.adasdas",
          role: "Role"
        }
      })
    }

  }
  return new Login()
}


const makeSut = (): SutTypes => {
  const _loginService = loginService()
  const sut = new LoginController(_loginService)
  return {
    sut,
    _loginService
  }
}


describe('LoginController', () => {
  it('should return token and user', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      email: "user@user.com",
      password: "123456"
    }
    const response = {
      user: {
        id: '1',
        name: 'user',
        role: 'role'
      },
      payload: {
        type: "bearer",
        token: "asdasdas.asdasdas.adasdas",
        role: "Role"
      }
    }
    const httpResponse = await sut.login(httpRequest)
    console.log(httpResponse)
    expect(httpResponse).toEqual(response)
  });
});