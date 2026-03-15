# Development Guidelines for Aspire Card Management App

This file documents the development practices and conventions for the Aspire Card Management Application.

## Project Overview

A modern React + TypeScript web application for managing payment cards with interactive features like adding, freezing, and deleting cards. Built with Vite, Tailwind CSS, and best practices for performance and maintainability.

## Technology Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.0
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage
- **Package Manager**: npm 10+

## Development Setup

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 10+
- Git
- VS Code (recommended)

### Quick Start

```bash
cd aspire-card-app
npm install
npm run dev
```

The application will open at `http://localhost:3000`

## Code Structure

```
src/
├── components/        # React components
│   ├── PaymentCard.tsx
│   ├── CardCarousel.tsx
│   └── AddCardModal.tsx
├── hooks/            # Custom React hooks
│   ├── useCardManagement.ts
│   └── useAddCardModal.ts
├── services/         # Business logic and utilities
│   └── cardService.ts
├── types/            # TypeScript type definitions
│   └── card.ts
├── styles/           # Global styles
│   └── globals.css
├── App.tsx
└── main.tsx
```

## Development Workflow

### Creating New Features

1. **Plan the feature** - Outline components and logic needed
2. **Create types** - Add to `src/types/` first
3. **Implement components** - Use React functional components with hooks
4. **Add business logic** - Implement in services or custom hooks
5. **Test locally** - Use dev server to verify functionality
6. **Check types** - Run `npm run type-check`

### Component Guidelines

Each component should:

- Have a clear, single responsibility
- Include proper TypeScript types
- Have descriptive prop interfaces
- Include ARIA labels for accessibility
- Use Tailwind CSS for styling
- Be properly documented with JSDoc if complex

Example:

```typescript
interface MyComponentProps {
  title: string;
  onAction: (id: string) => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onAction,
}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
```

## Code Style

- **Files**: Use PascalCase for components, camelCase for utilities
- **Variables**: Use meaningful, descriptive names
- **Functions**: Prefer arrow functions
- **Imports**: Organize by external, then internal
- **Comments**: Use for complex logic, not obvious code
- **Formatting**: Prettier compatible (configured via Tailwind)

### Example Format

```typescript
// React
import { useState, useCallback } from 'react';

// External libraries
import { Plus } from 'lucide-react';

// Internal
import { PaymentCard } from '@/components/PaymentCard';
import { useCardManagement } from '@/hooks/useCardManagement';
import '@/styles/globals.css';

// Component
interface MyProps {
  data: string;
}

export const MyComponent: React.FC<MyProps> = ({ data }) => {
  const [state, setState] = useState('');

  const handleAction = useCallback(() => {
    // Action logic
  }, []);

  return <div>{data}</div>;
};
```

## Git Workflow

### Branch Naming

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code improvements

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add freeze/unfreeze card functionality
fix: Correct carousel scroll behavior
docs: Update README with deployment instructions
refactor: Simplify card service logic
```

### Pull Request Process

1. Create a feature branch
2. Make changes and commit
3. Run type-check and build locally
4. Push and create PR
5. Request review
6. Merge after approval

## Testing Best Practices

### Local Testing Checklist

- [ ] TypeScript compilation passes (`npm run type-check`)
- [ ] No console errors in browser DevTools
- [ ] All features work as expected
- [ ] Responsive design tested on mobile/tablet
- [ ] Keyboard navigation works
- [ ] localStorage persists data correctly

### Manual Testing

- Add multiple cards and verify carousel
- Toggle freeze on different cards
- Delete cards and refresh page
- Check card details display correctly
- Verify modal form validation

## Performance Considerations

1. **Component Optimization**
   - Use React.memo for expensive components
   - Implement proper dependency arrays in hooks
   - Avoid unnecessary re-renders

2. **Bundle Size**
   - Review dependencies for size impact
   - Tree-shake unused code in build
   - Use dynamic imports if needed

3. **Runtime Performance**
   - Minimize localStorage operations
   - Debounce search/filter if added
   - Use CSS transforms for animations

## Common Tasks

### Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

### Check Vulnerabilities

```bash
npm audit
npm audit fix  # Auto-fix (use --force with caution)
```

## Deployment

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Import repository on Vercel
2. Auto-detected Vite configuration
3. Deploy!

### Manual Deployment

1. Run `npm run build`
2. Upload `dist/` folder to any static hosting
3. Configure server for single-page app routing

## Troubleshooting Development

### Dependencies not installed

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors after adding packages

```bash
npm run type-check  # Understand the error
npm install @types/package-name  # Install types if needed
```

### Dev server not responding

- Kill the terminal and restart: `npm run dev`
- Check if port 3000 is in use: Change in `vite.config.ts`
- Clear browser cache (Ctrl+Shift+Delete)

### localStorage issues

- Open DevTools → Application → LocalStorage
- Check for `aspire_cards` key
- Clear data if corrupted
- Reload page

## Browser DevTools

### Useful DevTools Features

1. **Console** - Check for errors and logs
2. **Network** - Monitor API calls and asset loading
3. **Application** - Inspect localStorage and cookies
4. **Elements/Inspector** - Debug DOM and CSS
5. **Performance** - Profile app performance

## IDE Configuration

### VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier - Code formatter
- ESLint

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev)

## Security Considerations

- Keep dependencies updated: `npm update`
- Monitor security advisories: `npm audit`
- Never commit `.env` files with secrets
- Validate user input in forms
- Use HTTPS in production

## Performance Metrics

Current targets:

- Lighthouse Performance: > 90
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

## Contributing Guidelines

1. Check existing issues before creating new ones
2. Fork the repository
3. Create a feature branch
4. Make clear, focused commits
5. Write meaningful commit messages
6. Keep PRs focused on one feature/fix
7. Test thoroughly before submitting

## Changelog

### Version 0.1.0

- Initial project setup
- Card carousel component
- Add card modal
- Freeze/unfreeze functionality
- localStorage persistence
- Dashboard with statistics
- Tailwind CSS styling
- TypeScript strict mode

## Future Roadmap

- User authentication
- Real API integration
- Transaction history
- Dark mode theme
- PWA support
- Unit and E2E tests
- Analytics integration
- Multi-language support

---

**Last Updated**: March 2026
**Maintained By**: Development Team
