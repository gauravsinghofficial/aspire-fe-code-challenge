# Contributing to Aspire Card Management App

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful to all contributors
- Provide constructive feedback
- Focus on code quality and user experience
- Report issues responsibly

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists
2. Use the issue template
3. Provide detailed reproduction steps
4. Include system information
5. Add screenshots if applicable

### Suggesting Features

1. Check if suggestion already exists
2. Provide clear use case
3. Explain expected behavior
4. Consider implementation approach

### Submitting Code

1. **Fork the Repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/aspire-card-app.git
   cd aspire-card-app
   ```

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow code style guidelines
   - Update types and interfaces
   - Add comments where needed
   - Test thoroughly

4. **Commit Changes**

   ```bash
   git commit -m "feat: description of your feature"
   ```

5. **Push to Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Use PR template
   - Link related issues
   - Request review from maintainers

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow naming conventions (PascalCase for components)
- Write descriptive variable/function names
- Add JSDoc for complex functions

### Commit Messages

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types: feat, fix, docs, style, refactor, perf, test, chore

### Testing

Before submitting:

```bash
npm run type-check
npm run build
npm run dev
```

### Performance

- Avoid unnecessary re-renders
- Use memoization appropriately
- Keep bundle size in check
- Test on slower networks

## Setup for Contributors

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run type checking
npm run type-check

# Build for production
npm run build
```

## Project Structure

See [DEVELOPMENT.md](.github/DEVELOPMENT.md) for detailed project structure and guidelines.

## Questions?

- Open an issue for discussion
- Check existing documentation first
- Ask in PR comments for clarification

---

We appreciate your contributions! 🎉
