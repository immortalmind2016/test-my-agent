export function greet(user) {
  // BUG: assumes `user` is always defined. For an anonymous visitor (no user),
  // this throws: "Cannot read properties of undefined (reading 'name')".
  return `Hello, ${user.name}!`;
}
