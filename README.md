# ⚖️ Premium Law Firm Website - Kenya

## Three-Tier Law Firm Website with Advanced Admin Panel

A modern, responsive law firm website built with React, featuring three service tiers (Basic, Standard, Premium) and a comprehensive admin panel for premium clients.

## 🚀 Features

### Core Features (All Tiers)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional UI/UX**: Legal-themed design with smooth animations
- **Practice Areas**: Showcase legal services with detailed descriptions
- **Team Profiles**: Display legal team with expertise and experience
- **Contact Forms**: Multiple contact options with validation
- **Emergency Contact**: 24/7 emergency legal assistance

### Standard Tier Features
- **Blog System**: Legal insights and articles
- **Case Studies**: Success stories and client testimonials
- **Appointment Booking**: Online consultation scheduling
- **Basic Analytics**: Website performance tracking

### Premium Tier Features
- **Full Admin Panel**: Complete case and client management
- **Client Portal**: Secure client access and document sharing
- **Advanced Analytics**: Detailed performance insights
- **Document Management**: Secure file storage and sharing
- **White-label Options**: Custom branding and domains

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form validation and management

### Admin Panel
- **Separate React App** - Isolated admin interface
- **Recharts** - Analytics and data visualization
- **Advanced Dashboard** - Case management and analytics

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing

## 📦 Project Structure

```
premium-law-firm-kenya/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   └── assets/        # Static assets
├── admin/             # Admin panel application
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
├── config/            # Configuration files
├── public/            # Public assets
└── docs/              # Documentation
```

## 🚀 Quick Start

### Main Website
```bash
cd premium-law-firm-kenya
npm install
npm run dev
```

### Admin Panel (Premium Tier)
```bash
cd admin
npm install
npm run dev
```

### Production Build
```bash
# Main website
npm run build

# Admin panel
cd admin && npm run build
```

## 🎯 Tier Configuration

The website supports three service tiers:

### Basic (Free)
- 5 Practice Areas
- Basic contact forms
- Team profiles
- Mobile responsive design
- 30 days support

### Standard (KES 15,000)
- 10 Practice Areas
- Blog system and case studies
- Appointment booking
- Client testimonials
- 90 days support

### Premium (KES 35,000)
- Unlimited Practice Areas
- Full admin panel
- Client portal
- Document management
- Advanced analytics
- Priority support
- White-label options

## 🔧 Configuration

### Firm Information
Edit `config/firm.json` to customize:
- Firm name and contact details
- Practice areas and services
- Team member information
- Social media links

### Tier Settings
Modify `config/tiers.json` to adjust:
- Feature sets for each tier
- Pricing and limitations
- Service offerings

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update colors in the legal color palette
- Adjust animations and transitions

### Content
- Edit page components in `src/pages/`
- Update reusable components in `src/components/`
- Modify firm data in config files

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation
- Mobile-optimized forms
- Touch-friendly interfaces
- Optimized images and assets

## 🔒 Security Features

- Form validation and sanitization
- Secure contact form handling
- Protected admin routes
- Input validation utilities

## 📈 Analytics & SEO

- Structured data markup
- Meta tags and descriptions
- Open Graph tags
- Twitter Card support
- Google Analytics ready

## 🤝 Support

For technical support and customization:
- **Developer**: GlimmerInk Creations
- **Phone**: 0746527253
- **Email**: nyamuehud@gmail.com
- **Portfolio**: https://glimmerink.co.ke/

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Lucide for the beautiful icons
- Vite team for the fast build tool

---

**Built with ❤️ by GlimmerInk Creations - Your trusted web development partner in Kenya**