import authReducer from '../../reducers/auth';

describe('auth reducer test suit', () => {
  test('should set uid after login', () => {
    const action = {
      type: 'LOGIN',
      uid: '1'
    };

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
  });

  test('should clear uid after logout', () => {
    const action = {
      type: 'LOGOUT'
    };

    const state = authReducer({ uid: 'anything'}, action);
    expect(state).toEqual({});
  });
});