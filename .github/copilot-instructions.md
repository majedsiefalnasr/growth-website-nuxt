# GitHub Copilot Instructions

### 🔄 Project Awareness & Context

- **Always read `BRIEF.md` and `README.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `BRIEF.md`.

### 🧱 Code Structure & Modularity

- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use clear, consistent imports** (prefer relative imports within packages).
- **Avoid circular imports** by carefully structuring dependencies.

### 🧪 Testing & Reliability

- **Always read `BRIEF.md`** to understand the testing framework and conventions.
- **After updating any logic**, check whether existing unit tests need to be updated. If so, do it.
- **Tests should live in a `/tests` folder** mirroring the main app structure.
  - Include at least:
    - 1 test for expected use
    - 1 edge case
    - 1 failure case

### 📎 Style & Conventions

- Write **docstrings for every function** using the Google style.
- For JavaScript/TypeScript code, **add JSDoc comments for every function, class, and exported symbol**.

### 📚 Documentation & Explainability

- **Update `README.md`** when new features are added, dependencies change, or setup steps are modified.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `# Reason:` comment** explaining the why, not just the what.

### 🧠 AI Behavior Rules

- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known, verified packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.

### 🛠️ Code Quality & Maintenance

- **Refactor code to improve clarity** without changing functionality.
- **Avoid unnecessary complexity** – keep solutions straightforward.
- **Use consistent naming conventions** throughout the codebase.
- **Always use type hints** for function signatures.
- **Use f-strings for string formatting**.
- **Avoid unnecessary comments**; code should be self-explanatory.
- **Never leave commented-out code** in the final version.
- **Avoid using `exec`, `eval`, or similar functions** that can execute arbitrary code.

### 🗂️ File Organization & Management

- **Avoid creating new files unnecessarily**. If a new file is needed, ensure it has a clear purpose and fits the existing structure.
- **Do not delete files unless explicitly requested**. If a file is no longer needed, comment it out and add a note explaining why.

### 📦 Dependencies & Packages

- When suggesting new packages, **always check if they are already included in `requirements.txt`** or the equivalent file.
- If a new package is needed, **ensure it is added to `requirements.txt`** with a brief explanation of its purpose.

### 📝 Commit Messages & Version Control

- **Use clear, descriptive commit messages** that explain the changes made and why.
- Follow the project's version control guidelines as outlined in `BRIEF.md`.

### ⚠️ Security & Privacy

- **Never hardcode sensitive information** (like API keys or passwords) in code.
- Always use environment variables or secure vaults for sensitive data.
- **Review code for potential security vulnerabilities** before committing changes.
- **Follow best practices for secure coding** as outlined in the project's security guidelines.

### ♿ Accessibility & Inclusively

- **Ensure all user-facing features are accessible** to people with disabilities (e.g., use semantic HTML, ARIA labels, and sufficient color contrast).
- **Write inclusive documentation and comments** (avoid gendered language, use clear and respectful terms).
- **Test UI components with screen readers and keyboard navigation** where applicable.

### 🔑 Handling Secrets

- **Store secrets in environment variables or secure vaults**; never commit them to version control.
- **Add `.env` and similar files to `.gitignore`** to prevent accidental leaks.
- **Document secret management and setup steps in `README.md`**.

### 📝 Issue & PR Templates

- **Use the provided issue and pull request templates** in `.github/ISSUE_TEMPLATE/` and `.github/pull_request_template/`.
- **Fill out all required sections** to ensure clarity and completeness.
- **Reference related issues and link to relevant documentation** when submitting PRs.

### ⬆️ Dependency Updates

- **Review and test all dependency updates** before merging.
- **For every new dependency, create a dedicated `.md` documentation file in the `docs/` directory (e.g., `docs/<package-name>-integration.md`).**
- **In `README.md`, reference the new documentation file instead of adding detailed setup or usage instructions directly.**
- **Document any new or removed dependencies in `README.md` and the appropriate manifest file** (e.g., `package.json`, `requirements.txt`, or equivalent).
- **If a dependency relates to a specific tool or integration, update or reference the relevant documentation file in `docs/` (e.g., `docs/tailwind-css-integration.md`, `docs/eslint-integration.md`, `docs/prettier-integration.md`) as needed.**
- **Check for security advisories** when updating dependencies.

### 📁 Handling Large Files

- **Do not commit large files (e.g., >100MB) to the repository** unless absolutely necessary.
- **Use Git LFS or external storage solutions** for large assets.
- **Add large file patterns to `.gitignore`** and document handling procedures in `README.md`.
