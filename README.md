# Raila Amolo Odinga Official Website

A modern, responsive, and multilingual website for Kenyan leader Raila Amolo Odinga built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Multilingual**: Support for English and Kiswahili
- **Performance Optimized**: Lazy loading, code splitting, image optimization
- **SEO Ready**: Meta tags, Open Graph, structured data
- **Accessibility**: WCAG compliant with keyboard navigation
- **Interactive Components**: Timeline, media gallery, contact forms
- **Brand Colors**: Orange (#FF8000), Royal Blue (#0057B8), White (#FFFFFF)

## 📋 Sections

1. **Hero Section** - Cinematic landing with parallax effects
2. **About** - Biography and achievements
3. **Timeline** - Interactive journey through history
4. **Vision** - Six pillars of transformation
5. **Media Gallery** - Photos and videos with filtering
6. **News Feed** - Latest updates and articles
7. **Projects** - Community initiatives with donation support
8. **Contact** - Multi-channel communication form

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/raila-odinga-site.git
cd raila-odinga-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build & Deploy

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
```bash
vercel
```

## 📁 Project Structure

```
raila-odinga-site/
├── app/
│   ├── components/     # React components
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/
│   └── images/         # Static images
├── styles/
│   └── globals.css     # Global styles
├── lib/
│   ├── data.ts        # Static data
│   └── utils.ts       # Utility functions
├── locales/
│   ├── en.json        # English translations
│   └── sw.json        # Kiswahili translations
└── package.json       # Dependencies
```

## 🎨 Customization

### Brand Colors
Edit colors in `tailwind.config.ts`:
```javascript
colors: {
  primary: {
    orange: '#FF8000',
    blue: '#0057B8',
  },
  dark: '#0A1A33',
}
```

### Fonts
The site uses:
- **Headings**: Space Grotesk
- **Body**: Inter

## 🌍 Internationalization

The site supports English and Kiswahili. Translation files are in `/locales/`.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lighthouse Score Target: >90 across all metrics
- Lazy loading for images and components
- Code splitting with dynamic imports
- Optimized fonts with next/font

## 🔒 Security

- Input validation on all forms
- CSRF protection
- Content Security Policy headers
- Secure API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspired by modern political campaign websites
- Built with love for Kenya 🇰🇪

## 📞 Contact

For inquiries: info@railaodinga.ke

---

**Unity. Service. Progress.**