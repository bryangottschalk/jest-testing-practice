const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Bryan', lastName: 'Gottschalk' };
    return user;
  },
  fetchUser: async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    return data;
  },
  // promise chain version
  fetchUserWithPromiseChaining: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error'),
};

module.exports = functions;
