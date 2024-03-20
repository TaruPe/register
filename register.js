function registerUser(username, password) {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }
  
    if (username.length < 6 || password.length < 12) {
      throw new Error('Username must be at least 6 characters long and password must be at least 12 characters long');
    }
  
    // username and password storage system returns the user's id
    return Math.floor(Math.random() * 1000) + 1;
  }
  
  module.exports = registerUser;