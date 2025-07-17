# Husky Integration

## Purpose

[Husky](https://typicode.github.io/husky) is used to manage Git hooks, such as pre-commit, to automate tasks like running `lint-staged` before code is committed. This helps enforce code quality and consistency.

## Setup

1. **Install Husky**:

   ```sh
   pnpm add -D husky
   ```

2. **Enable Git hooks**:

   ```sh
   pnpm husky install
   ```

   Add this to your `package.json` scripts (optional, but recommended):

   ```json
   "scripts": {
     // ...existing scripts
     "prepare": "husky install"
   }
   ```

3. **Add a pre-commit hook for lint-staged**:

   Create a file at `.husky/pre-commit` with the following content:

   ```sh
   #!/bin/sh
   . "$(dirname "$0")/_/husky.sh"
   npx lint-staged
   ```

## Usage

- On every commit, Husky will run `lint-staged` to check and fix staged files.
- You can add more hooks as needed (see Husky docs).

## References

- [Husky documentation](https://typicode.github.io/husky)

## Notes

- Ensure you have run `pnpm install` after adding Husky.
- If you clone the repo, run `pnpm install` to set up hooks.
- Update this file if you change hook logic or add new hooks.
