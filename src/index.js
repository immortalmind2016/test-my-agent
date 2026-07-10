import { greet } from './greet.js';

// Simulates the production call site: sometimes there is no user (anonymous
// visitor), so greet() is called with undefined and crashes.
export function welcome(user) {
  return greet(user);
}

console.log(welcome());
