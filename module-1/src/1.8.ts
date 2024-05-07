{
  // destructuring the elements

  const user = {
    name: `John`,
    age: 23,
    address: {
      city: `London`,
      country: `UK`,
    },
    hobbies: [`Sports`, `Cooking`],
  };

  const {
    address: { city },
  } = user;
  console.log(city);

  const users: string[] = ['Rachel', 'John', 'Smith', 'Jane'];
  const [, , smith, ...restUsers] = users;
  console.log(smith);
}
