# test-my-agent

A throwaway target repo for testing the **HeronAgent** coding agent.

It contains a deliberate bug: `greet()` in `src/greet.js` reads `.name` off an
`undefined` user, so an anonymous visitor crashes with:

```
TypeError: Cannot read properties of undefined (reading 'name')
```

`test/greet.test.js` has a failing test (`handles a missing user without
throwing`). The agent's job: fix `greet()` so both tests pass, then open a draft PR.

Run the tests:

```bash
npm test
```
