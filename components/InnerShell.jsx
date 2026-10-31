'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from './WhatsAppIcon';
import NavIcon from './NavIcon';

const links = [['/','Home'],['/menu','Menu'],['/about','About'],['/locations','Locations'],['/blog','Blog & Recipes'],['/contact','Contact']];

export function SiteHeader({cartCount=0,onCartOpen}) {
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  return <>
    <div className="topbar"><span>🔥 Fresh off the grill</span><span>Islamabad & Rawalpindi</span><a href="tel:+923055040848">Call 0305 5040848</a></div>
    <header className="header inner-header">
      <Link className="brand real-brand" href="/"><img src="/logo.svg" alt="Mirch N Spicy"/><span>Mirch <i>N</i> Spicy<small>Good food • Great taste</small></span></Link>
      <nav className={`nav ${open?'open':''}`}>{links.map(([href,label])=>{const selected=href==='/'?pathname===href:pathname.startsWith(href);return <Link key={href} href={href} aria-current={selected?'page':undefined} onClick={()=>setOpen(false)}><NavIcon name={label}/><span>{label}</span></Link>})}</nav>
      <div className="header-actions"><a className="btn btn-small" href="/menu">Order now</a>{onCartOpen?<button className="persistent-cart" onClick={onCartOpen} aria-label={`Open cart with ${cartCount} items`}><span>🛒</span><b>{cartCount}</b></button>:<Link className="persistent-cart" href="/menu" aria-label="Open menu and cart"><span>🛒</span><b>{cartCount}</b></Link>}<button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><span></span><span></span></button></div>
    </header>
  </>;
}

export function SiteFooter(){return <footer className="footer">
  <div className="footer-order">
    <div><p>Hungry already?</p><h2>Let’s make it <em>spicy.</em></h2><span>Choose from 153 printed-menu choices and send complete details directly on WhatsApp.</span></div>
    <div className="footer-order-actions">
      <Link className="footer-menu-action" href="/menu"><small>Browse all dishes</small><b>Explore menu</b><i className="footer-menu-icon"><NavIcon name="Menu"/></i></Link>
      <a className="footer-whatsapp-action" href="https://wa.me/923055040848?text=Assalam-o-Alaikum%20Mirch%20N%20Spicy!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer"><i><WhatsAppIcon/></i><b><small>Quick order</small>WhatsApp us</b><strong>→</strong></a>
    </div>
  </div>
  <div className="footer-main">
    <div className="footer-about"><Link className="brand footer-brand real-brand" href="/"><img src="/logo.svg" alt="Mirch N Spicy"/><span>Mirch <i>N</i> Spicy<small>Good food • Great taste</small></span></Link><p>Bold Pakistani flavours, fresh ingredients and warm hospitality—served daily across Islamabad and Rawalpindi.</p><div className="footer-badges"><span>11 branches</span><span>Open daily</span><span>Freshly made</span></div></div>
    <div className="footer-links"><div><h4>Explore</h4><Link href="/menu">Full menu</Link><Link href="/about">Our story</Link><Link href="/locations">All locations</Link><Link href="/blog">Blog & recipes</Link></div><div><h4>Help & policies</h4><Link href="/contact">Contact us</Link><Link href="/contact#faq">FAQs</Link><a href="https://mirchnspicy.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</a><a href="https://mirchnspicy.com/refund-cancellation-policy/" target="_blank" rel="noreferrer">Refund policy</a><a href="https://mirchnspicy.com/terms-conditions/" target="_blank" rel="noreferrer">Terms & conditions</a></div><div className="footer-contact"><h4>Visit & order</h4><a href="tel:+923055040848"><small>Call us</small>0305 5040848</a><a href="mailto:order@mirchnspicy.com"><small>Email</small>order@mirchnspicy.com</a><p><small>Opening hours</small>Mon–Fri · 9AM–10PM<br/>Sat–Sun · 9AM–12AM</p></div></div>
  </div>
  <div className="footer-locations"><span>Serving the twin cities</span><div><Link href="/locations">DHA Phase II</Link><Link href="/locations">F-8 Markaz</Link><Link href="/locations">Gulberg Greens</Link><Link href="/locations">Chaklala</Link><Link href="/locations">Lalkurti</Link><Link href="/locations">View all 11 →</Link></div></div>
  <div className="footer-bottom"><span>© 2026 Mirch N Spicy. All rights reserved.</span><div><Link href="/locations">Find a branch</Link><Link href="/">Back to top ↑</Link></div></div>
</footer>}

export function PageHero({kicker,title,accent,copy,image,className=''}){return <section className={`inner-hero ${className}`}><div><p className="eyebrow">{kicker}</p><h1>{title}<br/><em>{accent}</em></h1><p>{copy}</p></div>{image&&<img src={image} alt={`${title} ${accent}`}/>}</section>}

export default function InnerShell({children,cartCount=0,onCartOpen}){return <><SiteHeader cartCount={cartCount} onCartOpen={onCartOpen}/><main>{children}</main><SiteFooter/><a className="floating-call" href="https://wa.me/923055040848?text=Assalam-o-Alaikum%20Mirch%20N%20Spicy!%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer" aria-label="Order from Mirch N Spicy on WhatsApp"><WhatsAppIcon/><span>Order on WhatsApp</span></a></>}
