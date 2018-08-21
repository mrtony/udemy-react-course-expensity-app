import { login, logout } from '../../actions/auth';

describe('auth action test suit', () => {
  test('should login action return correct action object', () => {
    const uid = '1';
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      uid
    });
  });

  test('should logout action return correct action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });
});