# Frontend README

## 🚀 Futuristic Cyberpunk Portfolio Frontend

Modern React + Vite frontend for a world-class developer portfolio.

## Features

- ⚡ **Vite** - Lightning-fast development server
- 🎨 **Tailwind CSS** - Utility-first styling  
- 🎬 **GSAP** - Professional animations
- 🎭 **Framer Motion** - React animations
- 🌑 **Dark/Light Mode** - Beautiful theme switching
- 📱 **Mobile-First** - Fully responsive design
- 🎯 **Zustand** - Lightweight state management
- 🔄 **Axios** - HTTP client for API calls
- 🌊 **Lenis** - Smooth scrolling

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output in `dist/` directory.

### Preview Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx         # Desktop sidebar nav
│   ├── FloatingDock.jsx       # Mobile bottom nav
│   ├── ThemeToggle.jsx        # Dark/light switch
│   ├── GlowParticles.jsx      # Animated particles
│   ├── ProjectModal.jsx       # Project detail modal
│   └── SectionTitle.jsx       # Reusable title
├── sections/
│   ├── Hero.jsx              # Main hero section
│   ├── Skills.jsx            # Skills showcase
│   ├── Education.jsx         # Education timeline
│   ├── Experience.jsx        # Work experience
│   ├── Projects.jsx          # Projects grid
│   └── Contact.jsx           # Contact form
├── hooks/
│   └── useTheme.js           # Theme hook
├── utils/
│   └── api.js                # API client
├── store/
│   └── store.js              # Zustand store
├── styles/
│   └── globals.css           # Global styles
├── assets/                   # Images, videos, etc
├── App.jsx                   # Root component
└── main.jsx                  # Entry point
```

## Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cyberpunk: {
    neon: {
      pink: '#ff006e',      // Change these
      cyan: '#00f5ff',
      purple: '#9d4edd',
      green: '#39ff14',
      blue: '#0099ff'
    }
  }
}
```

### Content

- **Developer Name:** `Hero.jsx`
- **Skills:** `Skills.jsx`
- **Education:** `Education.jsx`
- **Experience:** `Experience.jsx`
- **Contact Info:** `Contact.jsx`

### Fonts

Edit `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet" />
```

### Typography

Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui'],
  mono: ['Mono Font', 'monospace'],
}
```

## Environment Variables

Create `.env.local`:

```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY=your_key_here
```

## API Integration

### Get Projects

```javascript
import { projectsAPI } from '@/utils/api'

const projects = await projectsAPI.getAll()
```

### Submit Contact

```javascript
import { contactAPI } from '@/utils/api'

await contactAPI.submit({
  name: 'Ruhi',
  email: 'jagritikushwaha95@gmail.com',
  subject: 'Hello',
  message: 'Message content'
})
```

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Lazy load images
   - Optimize file size

2. **Code Splitting**
   - Use dynamic imports
   - Split by route
   - Load components on demand

3. **Animations**
   - Use GPU transforms
   - Limit particle count
   - Respect `prefers-reduced-motion`

4. **Bundle Size**
   - Remove unused code
   - Tree-shake dependencies
   - Use production builds

## Testing

### Bundle Analysis

```bash
npm run build
npm run preview
```

Check performance in DevTools (Lighthouse).

### Mobile Testing

```bash
npm run dev
# Visit http://192.168.x.x:5173 on mobile
```

## Debugging

### Console Logs

```javascript
console.log('Debug message')
console.warn('Warning message')
console.error('Error message')
```

### React DevTools

- Install React DevTools browser extension
- Inspect components in DevTools
- See state changes

### Network Debugging

1. Open DevTools → Network tab
2. Make requests
3. Check responses
4. Verify payload sizes

## Deployment

### To Vercel

1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variables
5. Deploy

See [DEPLOYMENT_FRONTEND.md](../DEPLOYMENT_FRONTEND.md) for details.

## File Size Targets

- HTML: < 50KB
- CSS: < 50KB
- JS: < 200KB (gzipped)
- Total: < 300KB (gzipped)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## Accessibility

- ✓ Semantic HTML
- ✓ ARIA labels where needed
- ✓ Keyboard navigation
- ✓ Focus states
- ✓ Color contrast verified
- ✓ Screen reader tested

## SEO

- ✓ Meta tags
- ✓ Open Graph
- ✓ Structured data
- ✓ Canonical URLs
- ✓ Sitemap

## Troubleshooting

### Port Already in Use

```bash
# Change port in vite.config.js
server: {
  port: 3000  // Use different port
}
```

### Module Not Found

```bash
npm install
npm cache clean --force
rm -rf node_modules
npm install
```

### Build Fails

1. Check console output
2. Look for compilation errors
3. Verify all imports
4. Clear dist folder: `rm -rf dist`
5. Rebuild: `npm run build`

## Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com)
- [Framer Motion](https://www.framer.com/motion)

## License

MIT - Use freely for your portfolio

---

**Happy coding!** ✨

