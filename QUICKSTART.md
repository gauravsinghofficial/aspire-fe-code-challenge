# Aspire Card Management App - Quick Start Guide

Welcome! This guide will help you get the Aspire Card Management App up and running in just a few minutes.

## 📋 Prerequisites

Before you start, make sure you have:

- **Node.js** 18+ installed ([download](https://nodejs.org/))
- **npm** 10+ (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

Check your versions:

```bash
node --version   # Should be v18+
npm --version    # Should be 10+
```

## 🚀 Installation & Setup (5 minutes)

### Step 1: Navigate to Project Directory

```bash
cd c:\JavaScript\React\Aspire\aspire-card-app
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages (React, TypeScript, Tailwind CSS, etc.).

### Step 3: Start Development Server

```bash
npm run dev
```

The application will automatically open at **http://localhost:3000**

✅ **You're ready to use the app!**

## 🎮 Using the Application

### Add a New Card

1. Click the **"+ Add Card"** button in the top right
2. Enter a card name (e.g., "Travel Card", "Work Card")
3. Click **"Add Card"** button
4. Your new card appears in the carousel with:
   - Auto-generated 16-digit card number (masked for security)
   - Auto-generated expiration date
   - Default active status

### Freeze a Card

1. Look at any card in the carousel
2. Click the **lock icon** in the top right corner of the card
3. The card becomes semi-transparent and shows "Frozen" status
4. Frozen cards cannot be used but are still in your collection

### Unfreeze a Card

1. Click the **unlock icon** on a frozen card
2. The card returns to normal appearance and is active again

### Delete a Card

1. Click the **× button** on the top right of any card
2. The card is removed from your collection
3. The deletion is permanent

### View Statistics

The dashboard below the carousel shows:

- **Total Cards** - All cards in your collection
- **Active Cards** - Cards that are not frozen
- **Frozen Cards** - Cards currently frozen

## 💾 Data Persistence

✅ All your cards are automatically saved to your browser's storage. When you:

- Close the browser
- Refresh the page
- Leave and come back tomorrow

Your cards will still be there! Data is stored locally on your device.

### Clear Your Data (if needed)

```javascript
// In browser console (F12 > Console tab)
localStorage.clear();
// Then reload the page
```

## 🏗️ Build for Production (Advanced)

Create an optimized production-ready build:

```bash
npm run build
```

Output is in the `dist/` folder. The production build includes:

- Minified JavaScript (~155kB → 50kB gzipped)
- Optimized CSS (~14kB → 3.4kB gzipped)
- Optimized images and assets

Test the production build locally:

```bash
npm run preview
```

## 📱 Browser Support

This application works on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iPhone Safari, Chrome Android)

## 🛠️ Available Scripts

| Command              | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Start development server (with hot reload) |
| `npm run build`      | Create optimized production build          |
| `npm run preview`    | Preview production build locally           |
| `npm run type-check` | Verify TypeScript types                    |

## 🐛 Troubleshooting

### Problem: "npm: command not found"

**Solution:** Node.js is not installed. Download and install it from https://nodejs.org/

### Problem: Port 3000 is already in use

**Solution:** Another app is using port 3000. Options:

1. Find and close the other app
2. Change port in `vite.config.ts` (change `port: 3000` to a different number)
3. Kill the process: `npm install -g kill-port && kill-port 3000`

### Problem: "Cards not persisting after refresh"

**Solution:** Check browser settings:

1. Open DevTools (F12)
2. Go to Application tab
3. Check LocalStorage has `aspire_cards` key
4. If missing, localStorage might be disabled
5. Check browser privacy/security settings
6. Try using a private/incognito window

### Problem: Application shows blank white screen

**Solution:**

1. Check browser console (F12 > Console tab) for errors
2. Hard refresh: `Ctrl+Shift+Delete` (delete cache) then reload
3. Clear browser cache and cookies
4. Try a different browser

### Problem: Dev server starts but page won't load

**Solution:**

1. Check if server is running: Terminal should show "Local: http://localhost:3000"
2. Try manually visiting http://localhost:3000 in browser
3. Check for typos in the terminal output
4. Restart server: `Ctrl+C` then `npm run dev`

## 📚 Project Structure

```
aspire-card-app/
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Business logic
│   ├── types/              # TypeScript types
│   ├── styles/             # CSS files
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── dist/                   # Production build (after npm run build)
├── package.json            # Project dependencies
├── vite.config.ts          # Build configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Full documentation
```

## 🚀 Next Steps

1. **Explore the Code:** Open `src/App.tsx` to see the main component
2. **Add Features:** Create new components in `src/components/`
3. **Modify Styling:** Update colors in `tailwind.config.js`
4. **Deploy:** Push to GitHub, then deploy to Netlify/Vercel
5. **Read Documentation:** See `README.md` for detailed information

## 📖 Full Documentation

For more detailed information, see:

- **README.md** - Complete project documentation
- **.github/DEVELOPMENT.md** - Development guidelines and architecture
- **CONTRIBUTING.md** - How to contribute to the project

## 🤝 Need Help?

1. Check the [Troubleshooting](#troubleshooting) section above
2. Review the full [README.md](README.md)
3. Check [Development Guidelines](.github/DEVELOPMENT.md)
4. Open an issue on GitHub

## 🎯 Learning Path

If you're new to React/TypeScript:

1. Explore `src/App.tsx` - Main app structure
2. Look at `src/components/PaymentCard.tsx` - Component example
3. Study `src/hooks/useCardManagement.ts` - State management
4. Read `src/services/cardService.ts` - Business logic
5. Check `src/types/card.ts` - TypeScript types

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Node.js Guide](https://nodejs.org/en/docs/)

---

**Happy coding! 🎉**

Questions? Check the documentation files or open an issue on GitHub.
