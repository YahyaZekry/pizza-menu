# 🍕 The Perfect PizzaPlace - Next.js Pizza Menu

A modern, responsive pizza menu web application built with **Next.js 15** and **TypeScript**. This application features a beautiful card-based design, shopping cart functionality, search and filtering, and a complete user interface for ordering pizzas online.

## ✨ Features

### 🎨 **Modern UI/UX**
- **Beautiful Card Design** - Clean, professional pizza cards with hover effects
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Modern Typography** - Roboto Mono font for a clean, professional look

### 🛒 **Shopping Cart**
- **Add to Cart** - Easy one-click adding with quantity controls
- **Persistent Cart** - Cart survives page refreshes using localStorage
- **Real-time Updates** - Live total calculations and item counts
- **Cart Sidebar** - Slide-out cart with beautiful animations

### 🔍 **Search & Filter**
- **Live Search** - Find pizzas by name or ingredients
- **Smart Filtering** - Filter by name or price
- **Results Counter** - Shows number of matching pizzas

### ❤️ **Favorites System**
- **Heart Icons** - Add pizzas to favorites with visual feedback
- **Hover Effects** - Smooth animations on interaction

### 🎯 **User Experience**
- **Toast Notifications** - Success/error feedback for user actions
- **Loading States** - Smooth loading animations
- **Error Boundaries** - Graceful error handling
- **Accessibility** - Keyboard navigation and screen reader support

### 📱 **Mobile Optimized**
- **Touch-Friendly** - Large buttons and touch targets
- **Responsive Grid** - Adapts from 3 columns to 1 column
- **Mobile Navigation** - Optimized for mobile interactions

## 🚀 **Technology Stack**

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom CSS layers
- **State Management**: Zustand for cart and app state
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Image Optimization**: Next.js Image component with blur placeholders

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── Cart.tsx       # Shopping cart sidebar
│   │   ├── ErrorBoundary.tsx # Error boundary component
│   │   ├── Footer.tsx     # Footer with business hours
│   │   ├── Header.tsx     # Header with cart icon
│   │   ├── Menu.tsx       # Menu with search and filter
│   │   ├── Pizza.tsx      # Individual pizza card
│   │   └── Toast.tsx      # Toast notifications
│   ├── globals.css        # Global styles and utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── lib/                   # Utility libraries
│   ├── data.ts           # Pizza data and business hours
│   ├── store.ts          # Zustand store configuration
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    └── pizzas/           # Pizza images
```

## 🛠️ **Getting Started**

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YahyaZekry/pizza-menu.git
   cd pizza-menu
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 **Available Scripts**

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 **Design System**

### **Colors**
- **Primary**: Yellow (`#edc84b`, `#f59e0b`)
- **Background**: Cream (`#f7f2e9`)
- **Text**: Dark gray (`#252525`)
- **Cards**: White with subtle shadows

### **Typography**
- **Font Family**: Roboto Mono
- **Headings**: 300 weight for elegance
- **Body**: 400 weight for readability
- **Buttons**: 500-600 weight for emphasis

### **Spacing**
- **Container**: Max-width 80rem (1280px)
- **Grid Gaps**: 2-3rem depending on screen size
- **Card Padding**: 1.5-2rem for comfortable spacing

## 🌟 **Key Features**

### **Pizza Cards**
- **Image Display** - High-quality pizza images with lazy loading
- **Price Badges** - Clear pricing with sold-out indicators
- **Ingredient Lists** - Truncated text with hover effects
- **Interactive Buttons** - Add to cart and favorites functionality

### **Cart System**
- **Sidebar Interface** - Slide-out cart from the right
- **Quantity Controls** - Increase/decrease item quantities
- **Real-time Totals** - Automatic price calculations
- **Persistent Storage** - Cart survives browser refreshes

### **Search & Filter**
- **Live Search** - Instant results as you type
- **Multiple Filters** - Filter by name or price
- **Results Counter** - Shows number of matching items
- **Empty States** - Helpful messaging when no results found

## 🚀 **Performance**

- **Next.js 15** - Latest features and optimizations
- **Turbopack** - Fast development builds
- **Image Optimization** - Automatic WebP conversion and blur placeholders
- **Code Splitting** - Automatic route-based code splitting
- **Caching** - Optimized caching strategies

## 📱 **Responsive Design**

- **Desktop (1200px+)**: 3-column grid layout
- **Tablet (768px-1199px)**: 2-column grid layout
- **Mobile (<768px)**: Single column for touch-friendly interaction

## 🔧 **Development**

### **Code Quality**
- **TypeScript** - Full type safety throughout the application
- **ESLint** - Code linting and formatting
- **Error Boundaries** - Graceful error handling
- **Component Architecture** - Modular, reusable components

### **State Management**
- **Zustand** - Lightweight state management for cart and UI state
- **Local Storage** - Persistent cart data
- **React Hooks** - Modern React patterns throughout

## 🌐 **Browser Support**

- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Mobile Browsers** - iOS Safari, Chrome Mobile
- **Progressive Enhancement** - Graceful degradation for older browsers

**Built with ❤️ using Next.js 15, TypeScript, and modern web technologies**
