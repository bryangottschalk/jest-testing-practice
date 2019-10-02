const functions = require('./functions');

//toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual (for testing non-primitives)
test('User should be Bryan Gottschalk object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Bryan',
    lastName: 'Gottschalk',
  });
});

test('Should be under 1600,', () => {
  //note this logic is not coming for the functions file
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/i/);
});

// Arrays
test('Admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

/* Working with async data */

//Async Await
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

//Promise Chaining
test('Promise chained user fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
