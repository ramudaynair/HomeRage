# RageBait React Landing Page

A modern, animated React version of the RageBait VS Code extension landing page with enhanced animations using Anime.js.

## Features

- **React Components**: Modular, reusable components
- **Anime.js Animations**: Smooth, professional animations including:
  - Logo entrance with elastic scaling and rotation
  - Staggered feature card animations
  - Scroll-triggered animations for sections
  - Floating icons and pulsing buttons
  - Hover effects with smooth transitions
- **Enhanced Styling**: Modern CSS with gradients, backdrop filters, and glowing effects
- **Responsive Design**: Mobile-friendly layout
- **Performance Optimized**: Intersection Observer for scroll animations

**🔗 Live Demo:** [View on Vercel](https://home-rage.vercel.app/)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Animation Features

### Entrance Animations
- Logo scales from 0 with elastic easing and 360° rotation
- Title slides up with fade-in effect
- Feature cards animate in with staggered timing

### Scroll Animations
- Steps section animates from left when scrolled into view
- Tech stack items scale and rotate in with staggered timing
- All animations use Intersection Observer for performance

### Interactive Animations
- Feature icons float continuously
- Buttons pulse gently
- Hover effects with smooth scaling
- Shimmer effects on cards and buttons

### Background Effects
- Animated gradient backgrounds
- Pulsing radial gradients
- Warning box glowing effect

## File Structure

```
ragebait-proper/html/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── RageBait.jsx        # Main component
│   ├── RageBait.css        # Component styles
│   ├── App.js              # App wrapper
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies
└── README.md              # This file
```

## Dependencies

- **React 18.2.0**: Modern React with hooks
- **Anime.js 3.2.1**: Lightweight animation library
- **React Scripts**: Development and build tools

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Notes

- Animations use `requestAnimationFrame` for smooth 60fps
- Intersection Observer prevents unnecessary animations
- CSS transforms for hardware acceleration
- Optimized bundle size with tree shaking
