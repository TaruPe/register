const registerUser = require('./register');

describe('registerUser', () => {
  test('registers a user with valid username and password', () => {
    const username = 'usertest';
    const password = 'passwordispassword';

    expect(() => {
      const userId = registerUser(username, password);
      expect(typeof userId).toBe('number');
    }).not.toThrow();
  });

  test('throws an error when username or password is missing', () => {
    expect(() => {
      registerUser('', 'password');
    }).toThrow('Username and password are required');

    expect(() => {
      registerUser('username', '');
    }).toThrow('Username and password are required');
  });

  test('throws an error when username or password is too short', () => {
    expect(() => {
      registerUser('abcde', 'password');
    }).toThrow('Username must be at least 6 characters long and password must be at least 12 characters long');

    expect(() => {
      registerUser('username', '12345678911');
    }).toThrow('Username must be at least 6 characters long and password must be at least 12 characters long');
  });
});