# lint-staged Integration

## Purpose

`lint-staged` is used to run linters on files that are staged for commit. This helps ensure code quality and consistency before code is committed to the repository.

## Setup

1. **Install the package** (already done):

   ```sh
   pnpm add -D lint-staged
   ```

   or with npm:

   ```sh
   npm install --save-dev lint-staged
   ```

2. **Configure lint-staged**:
   - Add a `lint-staged` section to your `package.json`, or create a `.lintstagedrc` file.
   - Example configuration (for JS/TS projects):

     ```json
     {
       "*.{js,ts,vue}": ["eslint --fix", "prettier --write"]
     }
     ```

3. **Usage**:
   - `lint-staged` is typically run as a pre-commit hook (e.g., with Husky).
   - To manually run:

     ```sh
     npx lint-staged
     ```

## References

- [lint-staged documentation](https://github.com/okonet/lint-staged)

## Notes

- Ensure your linters (e.g., ESLint, Prettier) are properly configured.
- Update this file if you change the configuration or add new file types.
