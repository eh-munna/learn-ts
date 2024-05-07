{
  const age = 18;
  console.log(age > 18 ? `You're adult` : `You're not adult`);

  //   nullish coalescing operator

  const user = null;

  const guestUser = user ?? 'Guest';
  console.log(guestUser);
}
