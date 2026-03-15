<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Aspire Card Management App - Development Guidelines

## Project Overview

A modern React + TypeScript web application for managing payment cards with freeze/unfreeze functionality, built with Vite and Tailwind CSS.

## Quick Start

```bash
cd aspire-card-app
npm install
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Create production build
npm run type-check   # Verify TypeScript types
```

## Project Structure

- **src/components/** - React components (PaymentCard, CardCarousel, AddCardModal)
- **src/hooks/** - Custom React hooks (useCardManagement, useAddCardModal)
- **src/services/** - Business logic (cardService for card generation and storage)
- **src/types/** - TypeScript type definitions
- **src/styles/** - Global CSS and animations
- **dist/** - Production build output

## Key Technologies

- React 18.3 with TypeScript 5.3
- Vite 5.0 (fast build tool)
- Tailwind CSS 3.4 (utility-first styling)
- Lucide React (icon library)
- localStorage (data persistence)

## Development Rules

1. Use strict TypeScript - enable strict mode
2. Follow naming conventions:
   - Components: PascalCase (PaymentCard.tsx)
   - Functions/Variables: camelCase (useCardManagement)
   - Types: PascalCase (PaymentCard interface)
3. Include proper TypeScript interfaces for all props
4. Use React hooks for state management
5. Avoid unnecessary re-renders with proper dependencies
6. Use Tailwind CSS classes instead of custom CSS when possible
7. Test locally before committing: `npm run type-check && npm run build`

## Code Style

- 2-space indentation
- Double quotes for strings
- Alphabetical import ordering (React, external libs, internal)
- Add semicolons at end of statements
- Use arrow functions: `const func = () => {}`

## Git Workflow

- Branch naming: `feature/name`, `bugfix/name`, `docs/name`
- Commit messages: `feat: description`, `fix: description`
- Pull requests require: type-check pass, build success, no console errors

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run type-check   # Run TypeScript compiler
npm install          # Install dependencies
npm audit fix        # Fix security vulnerabilities
```

## Component Creation Guide

### 1. Create Component File

```typescript
// src/components/MyComponent.tsx
interface MyComponentProps {
  data: string;
  onAction: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  data,
  onAction,
}) => {
  return (
    <div className="...">
      {data}
    </div>
  );
};
```

### 2. Export from index (if creating index.ts)

```typescript
export { MyComponent } from "./MyComponent";
```

### 3. Use in App

```typescript
import { MyComponent } from "@/components/MyComponent";
```

## Debugging Tips

1. **Type errors**: Run `npm run type-check` to see all TypeScript errors
2. **Browser DevTools**:
   - Console tab for errors
   - Application tab for localStorage (aspire_cards)
   - Network tab to check asset loading
3. **React DevTools**: Install React Developer Tools extension
4. **localStorage**: Check DevTools → Application → LocalStorage

## Performance Optimization

- Build size is ~155kB (JS) + 13.7kB (CSS), ~50kB gzipped total
- Vite provides fast HMR during development
- Tree-shaking removes unused code in production
- Tailwind PurgeCSS removes unused CSS classes

## Testing Locally

Before pushing changes:

```bash
npm run type-check    # Verify no TypeScript errors
npm run build         # Ensure production build works
npm run dev           # Test in browser
```

## Deployment Checklist

- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds
- [ ] No console errors in browser DevTools
- [ ] Tested on mobile/tablet (responsive design)
- [ ] localStorage persistence works
- [ ] All card operations work (add, freeze, delete)
- [ ] README.md is updated if needed

## Available Environment Variables

Create `.env.local` file:

```
VITE_API_ENDPOINT=http://localhost:3001
VITE_APP_TITLE=Aspire Card Management
VITE_DEBUG=false
```

These are injected via Vite at build time. Access with: `import.meta.env.VITE_*`

## Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)

## Important Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.gitignore` - Files to exclude from git
- `README.md` - Project documentation

## Troubleshooting

### Dev server won't start

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Type-check errors

```bash
npm run type-check    # See detailed errors
npm install @types/package-name  # Install missing types
```

### Build fails

```bash
npm run build         # See detailed error messages
npm run type-check    # Check TypeScript first
```

### Cards not persisting

- Check Browser DevTools → Application → LocalStorage
- Look for `aspire_cards` key
- Clear localStorage if corrupted: `localStorage.clear()`
- Reload browser

## IDE Configuration

Use VS Code with these extensions:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier - Code formatter
- ESLint

## Performance Targets

- Production JS: <160kB
- Production CSS: <15kB
- Gzipped total: <60kB
- Load time: <2s on 3G
- Lighthouse score: >90
