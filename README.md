# Aspire Card Management Application

A modern, responsive dashboard for managing payment cards built with React, TypeScript, and Tailwind CSS. Implements the Aspire design system with a two-column layout featuring card management, transaction history, and detailed card controls.

## Features

✨ **Core Features:**

- 💳 **Debit Card Display** - Single green card with cardholder details, card number, and expiry
- 👀 **Show/Hide Card Number** - Toggle to reveal or hide the full card number
- 🎯 **Card Carousel** - Browse multiple cards with indicator dots
- ➕ **Add New Cards** - Modal dialog to add new payment cards
- ❄️ **Freeze/Unfreeze Cards** - Disable/enable card with visual indication
- 🔧 **Card Actions** - Quick actions for freeze, spend limits, Google Pay, replace, and cancel
- 📊 **Transaction History** - View recent transactions with status and amounts
- 💾 **Persistent Storage** - All data saved to browser localStorage
- 📱 **Responsive Design** - Two-column layout on desktop, adapts to tablets

🎨 **Design Features:**

- 🎨 **Aspire Brand Colors** - Full color system (#0C365A navy, #01D167 green, #325BAF blue)
- 📐 **Two-Column Layout** - Left column for card (60%), right column for details (40%)
- 🎭 **Collapsible Accordions** - Card details and transaction history sections
- 🧭 **Fixed Sidebar Navigation** - Dark navy sidebar with active state indicators
- ⚡ **Smooth Animations** - Accordion expand/collapse with icon rotation

## Project Structure

```
aspire-card-app/
├── src/
│   ├── components/
│   │   ├── PaymentCard.tsx        # Individual debit card component
│   │   ├── CardActions.tsx        # Action buttons (freeze, spend limit, etc.)
│   │   ├── Sidebar.tsx            # Left navigation sidebar
│   │   ├── RightPanel.tsx         # Right panel accordion sections
│   │   ├── TransactionHistory.tsx # Transaction list component
│   │   ├── AddCardModal.tsx       # Modal for adding new cards
│   │   └── CardCarousel.tsx       # Carousel navigation (legacy)
│   ├── services/
│   │   └── cardService.ts         # Card generation and localStorage logic
│   ├── hooks/
│   │   ├── useCardManagement.ts   # Card state management
│   │   └── useAddCardModal.ts     # Modal state management
│   ├── types/
│   │   └── card.ts                # TypeScript interfaces
│   ├── styles/
│   │   └── globals.css            # Global styles
│   ├── config/
│   │   └── env.ts                 # Environment configuration
│   ├── App.tsx                    # Main app component
│   └── main.tsx                   # Entry point
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm 10+
- A modern web browser

### Installation

1. **Install dependencies**

```bash
npm install
```

2. **Start the development server**

```bash
npm run dev
```

The application will open automatically at `http://localhost:5173` (or next available port)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## How to Use

### Viewing Your Cards

1. The **primary card** (Mark Henry) displays in the green card component
2. Click carousel indicator dots at the bottom to switch between cards
3. Click **"Show card number"** to reveal the full card number

### Adding a Card

1. Click the **"+ Add Card"** button in the top right
2. Enter a card name and click **"Add Card"**
3. The card is automatically added and appears in the carousel

### Card Actions

Quick actions available below the card:

- **Freeze/Unfreeze** - Disable card usage
- **Set Spend Limit** - Configure spending restrictions
- **Add to GPay** - Add card to Google Pay
- **Replace Card** - Order a replacement card
- **Cancel Card** - Permanently close the card

### Card Details & Transactions

**Right Panel:**

- **Card Details** (collapsible) - Full card information
- **Recent Transactions** (expandable) - Payment history with dates and amounts

Click section headers to expand/collapse.

## Color Scheme (Aspire Design System)

- **Primary Navy**: `#0C365A` - Sidebar background
- **Success Green**: `#01D167` - Debit card, active states
- **Primary Blue**: `#325BAF` - Add button, icons
- **Light Background**: `#F5F7FA` - Page background
- **Light Blue**: `#EDF3FF` - Action button backgrounds
- **Light Red**: `#FDE8E8` - Cancel button background
- **Error Red**: `#EF4444` - Cancel button icon

## Tech Stack

### Frontend

- **React 18** - UI library with hooks
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Icon library (Eye, Lock, Settings, etc.)

### State Management

- **React Hooks** - useState for local state
- **LocalStorage** - Persistent data storage
- **Custom Hooks** - useCardManagement, useAddCardModal

## Available Scripts

| Script               | Description                |
| -------------------- | -------------------------- |
| `npm run dev`        | Start development server   |
| `npm run build`      | Build optimized production |
| `npm run preview`    | Preview production build   |
| `npm run type-check` | Check TypeScript types     |

## Data Structure

### Card Type

```typescript
interface PaymentCard {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string; // MM/YY format
  isFrozen: boolean;
  createdAt: Date;
}
```

### Transaction Type

```typescript
interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  status: "charged" | "refund";
}
```

## Default Cards

The application comes with two sample cards:

1. **Mark Henry** - Primary debit card (12/26)
2. **John Doe** - Secondary debit card (08/27)

3. **CSS Optimization**
   - PurgeCSS via Tailwind to remove unused styles
   - Minimal custom CSS
   - CSS modules for component-scoped styles

4. **Build Optimization**
   - Tree-shaking of unused code
   - Code splitting ready
   - Source maps for development
   - Minified production builds

## Code Quality

- **TypeScript strict mode** - Catches type errors at compile time
- **Consistent naming conventions** - camelCase for variables/functions, PascalCase for components
- **Proper error handling** - Try-catch blocks where needed
- **Clean code practices** - DRY, SOLID principles
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

## Styling Architecture

The project uses a combination of:

- **Tailwind CSS** for utility classes and rapid development
- **Custom CSS** in `globals.css` for animations and browser-specific styles
- **Inline Tailwind classes** for component-specific styling
- **CSS variables** ready to be added for theming (if needed)

## Deployment

### Deploy to Netlify

1. Push your repository to GitHub
2. Connect to Netlify and select the repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Deploy to Vercel

1. Push your repository to GitHub
2. Import project on Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

### Environment Variables

If needed in the future, create a `.env.local` file:

```
VITE_API_ENDPOINT=https://api.example.com
```

## Future Enhancements

- 🔐 User authentication and accounts
- 🏦 Integration with real banking API
- 📊 Transaction history and analytics
- 🎨 Dark mode theme toggle
- 🔔 Notifications for card events
- 📱 PWA support for offline usage
- 🧪 Unit and E2E tests

## Troubleshooting

### Development server won't start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Cards not persisting

- Check if localStorage is enabled in your browser
- Open DevTools → Application → LocalStorage and verify `aspire_cards` key exists
- Clear browser cache and reload

### TypeScript errors

```bash
npm run type-check  # Verify all types
```

## License

This project is created for educational purposes.

## Support & Contact

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

Visit the [Live Demo](#) • [Repository](#) • [Issues](#)
