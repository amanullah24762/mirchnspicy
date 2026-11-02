import '../style.css';
import './menu/menu.css';
import './mobile.css';
import './hero.css';
import './hero-clean.css';
import './responsive-polish.css';
import './motion.css';
import './loading.css';
import './whatsapp.css';
import './tabs-fix.css';
import './cart-icon.css';
import './cart-color-fix.css';
import './story-mobile-fix.css';
import './navbar-static.css';
import './menu-mobile-fix.css';
import './mobile-audit.css';
import './mobile-motion-fix.css';
import './whatsapp-icon-fix.css';
import './cart-contrast-fix.css';
import './mobile-nav-premium.css';
import './mobile-cart-redesign.css';
import './button-system.css';
import './menu-cards-pagination-fix.css';
import './final-site-audit.css';
import './city-tabs-fix.css';
import './footer-redesign.css';
import './faq-redesign.css';
import './talk-to-us-redesign.css';
import './field-hints-fix.css';
import './custom-select.css';
import './about-redesign.css';
import './branch-cards-fix.css';
import './contact-page-redesign.css';
import './desktop-fixes.css';
import './variant-modal.css';
import './menu-product-cards.css';
import './cart-toolbar-fix.css';
import './variant-selection-controls.css';
import './responsive-regression-fix.css';
import './category-section.css';
import './menu-search-redesign.css';
import './variant-modal-final.css';
import './home-card-quantity.css';
import './home-menu-sync.css';
import './branch-selector.css';
import './branch-selector-extras.css';
import './branch-location-header.css';
import './branch-promotions.css';
import './branch-mobile-polish.css';
import './clickable-affordance.css';
import './glass-card-system.css';
import './branch-promotions.css';
import MotionEffects from '../components/MotionEffects';
import {BranchProvider} from '../components/BranchProvider';

export const metadata = {
  title: 'Mirch N Spicy | Good Food. Great Taste.',
  description: 'Bold Pakistani flavours, BBQ, karahi, rolls and more across Islamabad & Rawalpindi.',
  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </head>
      <body><BranchProvider><MotionEffects/>{children}</BranchProvider></body>
    </html>
  );
}
